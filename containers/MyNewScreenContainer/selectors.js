import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myNewScreenContainer state domain
 */

const selectMyNewScreenContainerDomain = state =>
  state.get('myNewScreenContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyNewScreenContainer
 */

const makeSelectMyNewScreenContainer = () =>
  createSelector(selectMyNewScreenContainerDomain, substate => substate.toJS());

export default makeSelectMyNewScreenContainer;
export { selectMyNewScreenContainerDomain };
