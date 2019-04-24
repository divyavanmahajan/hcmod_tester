/*
 * MyNewScreen Messages
 *
 * This contains all the text for the MyNewScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.MyNewScreen';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MyNewScreen component!',
  },
});
