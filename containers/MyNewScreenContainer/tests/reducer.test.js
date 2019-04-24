import { fromJS } from 'immutable';
import myNewScreenContainerReducer from '../reducer';

describe('myNewScreenContainerReducer', () => {
  it('returns the initial state', () => {
    expect(myNewScreenContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
