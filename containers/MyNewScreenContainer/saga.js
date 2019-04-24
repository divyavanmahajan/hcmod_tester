import { call, put, takeLatest } from 'redux-saga/effects';
// import { API } from 'aws-amplify';
import request from 'utils/request';

import { fetchDataFailure, fetchDataSuccess } from './actions';
import { API_FETCHDATA } from './constants';
// Individual exports for testing

/**
 * fetchData
 * This is the real remote API called by Redux-Saga.
 */
export function fetchDataAPI(url) {
  // const requestData = {
  //   body: { param1, param2, param3 },
  // };
  // return API.post('v2Benchmark', `/testurl`, requestData);
  // return API.get('v2Benchmark', `/testurl`);
  return request(url);
}

/**
 * SAGA for getHospitals API request/response handler
 */
function* fetchDataSaga(actiondata) {
  const { param1, param2, param3 } = actiondata;
  const requestURL = '/api/modules';
  try {
    const payload = yield call(fetchDataAPI, requestURL);
    const response = payload;
    yield put(fetchDataSuccess(response));
  } catch (err) {
    yield put(fetchDataFailure(param1, param2, param3, err));
  }
}

export default function* myNewScreenContainerSaga() {
  yield [
    takeLatest(API_FETCHDATA, fetchDataSaga),
    // Other Sagas here
  ];
}
