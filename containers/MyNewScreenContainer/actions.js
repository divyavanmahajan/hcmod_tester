/*
 *
 * MyNewScreenContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  CLICK_ACTION,
  API_FETCHDATA,
  API_FETCHDATA_SUCCESS,
  API_FETCHDATA_FAILURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const clickAction = payload => ({
  type: CLICK_ACTION,
  payload,
});

export const fetchData = (param1, param2, param3) => ({
  type: API_FETCHDATA,
  param1,
  param2,
  param3,
});
export const fetchDataSuccess = response => ({
  type: API_FETCHDATA_SUCCESS,
  response,
});
export const fetchDataFailure = (param1, param2, param3, message) => ({
  type: API_FETCHDATA_FAILURE,
  param1,
  param2,
  param3,
  message,
});
