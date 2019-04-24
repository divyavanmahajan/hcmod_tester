import { call, put, takeLatest } from 'redux-saga/effects';
import { API } from 'aws-amplify';
import { fetchDataFailure, fetchDataSuccess } from './actions';
import {
  API_FETCHDATA,
  API_FETCHDATA_SUCCESS,
  API_FETCHDATA_FAILURE,
} from './constants';
// Individual exports for testing

/**
 * fetchData
 * This is the real remote API called by Redux-Saga.
 */
export function fetchDataAPI(param1, param2, param3) {
  // const requestData = {
  // body: { param1, param2, param3 },
  // };
  // return API.post(v2Benchmark', `/testurl`, requestData);
  return API.get('v2Benchmark', `/testurl`);
}

/**
 * SAGA for getHospitals API request/response handler
 */
function* fetchDataSaga(actiondata) {
  const { param1, param2, param3 } = actiondata;
  try {
    const payload = yield call(fetchDataAPI, param1, param2, param3);
    if (payload.statusCode === 200) {
      const response = payload.body;
      yield put(fetchDataSuccess(response));
    } else {
      throw new Error('Error calling the fetchData API');
    }
  } catch (err) {
    yield put(fetchDataFailure(param1, param2, param3, err));
  }
}

export default function* overallSaga() {
  yield [
    takeLatest(API_FETCHDATA, fetchDataSaga),
    // Other Sagas here
  ];
}
