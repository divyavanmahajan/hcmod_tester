/**
*
* Asynchronously loads the component for tester
*
*/

import loadable from 'loadable-components';

export default loadable(() => import('./index'));