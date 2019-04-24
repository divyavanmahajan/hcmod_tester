/**
 *
 * MyNewScreenContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMyNewScreenContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
// eslint-disable-next-line no-unused-vars
import messages from './messages';
import MyNewScreen from '../../components/MyNewScreen';
import { clickAction, fetchData } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class MyNewScreenContainer extends React.Component {
  componentWillMount() {
    this.props.fetchData();
  }

  myFunc = param1 => {
    // console.log(param1);
    this.props.clickAction(param1);
  };

  callAPI = () => {
    this.props.fetchData();
  };

  render() {
    const nameV = this.props.myNewScreenContainer.name;
    const counterV = this.props.myNewScreenContainer.counter;
    return (
      <div>
        <MyNewScreen
          onFunc={this.myFunc}
          onAPI={this.callAPI}
          name={nameV}
          counter={counterV}
          {...this.props}
        />
      </div>
    );
  }
}

MyNewScreenContainer.propTypes = {
  clickAction: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  myNewScreenContainer: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  myNewScreenContainer: makeSelectMyNewScreenContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    clickAction: payload => dispatch(clickAction(payload)),
    fetchData: () => dispatch(fetchData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'myNewScreenContainer', reducer });
const withSaga = injectSaga({ key: 'myNewScreenContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyNewScreenContainer);
