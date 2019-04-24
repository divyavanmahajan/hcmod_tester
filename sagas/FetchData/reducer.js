/*
*
* FetchData reducer
*
*/

import { fromJS } from 'immutable';
import { toast } from 'mdbreact';

import {
  API_FETCHDATA,
  API_FETCHDATA_SUCCESS,
  API_FETCHDATA_FAILURE,
} from './constants';
export const initialState = fromJS({});

// Merge this into your container's reducer
function fetchDataReducer(state = initialState, action) {
  switch (action.type) {
    case API_FETCHDATA:
      return state.set('calling_API_FETCHDATA', true);
    case API_FETCHDATA_SUCCESS:
      return state.merge({
        response: action.response,
        calling_API_FETCHDATA: false,
      });
    case API_FETCHDATA_FAILURE:
      toast.error(`API fetchData error:${action.message}`);
      return state.set('calling API_FETCHDATA', false);
    default:
      return state;
  }
}

export default fetchDataReducer;
