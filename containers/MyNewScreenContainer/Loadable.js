/**
 *
 * Asynchronously loads the component for MyNewScreenContainer
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
