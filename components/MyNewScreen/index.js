/**
 *
 * MyNewScreen
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class MyNewScreen extends React.Component {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <div>Hello {this.props.name}</div>
        <div onClick={this.props.onFunc}>Click me {this.props.counter}</div>
        <div onClick={this.props.onAPI}>Call the API</div>
      </div>
    );
  }
}

MyNewScreen.propTypes = {
  onFunc: PropTypes.func.isRequired,
  onAPI: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
};

export default MyNewScreen;
