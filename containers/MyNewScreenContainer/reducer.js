/*
 *
 * MyNewScreenContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { toast } from 'mdbreact';
import {
  DEFAULT_ACTION,
  CLICK_ACTION,
  API_FETCHDATA,
  API_FETCHDATA_SUCCESS,
  API_FETCHDATA_FAILURE,
} from './constants';

export const initialState = fromJS({
  name: 'Divya',
  counter: 0,
});

function myNewScreenContainerReducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_ACTION: {
      const oldValue = state.get('counter');
      return state.set('counter', oldValue + 1);
    }
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

    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default myNewScreenContainerReducer;
