import { fromJS } from 'immutable';
import fetchDataReducer from '../reducer';

describe('fetchDataReducer', () => {
  it('returns the initial state', () => {
    expect(fetchDataReducer(undefined, {})).toEqual(fromJS({}));
  });
});
