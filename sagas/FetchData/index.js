/*
*
* FetchData
*
*/

import { API_FETCHDATA, API_FETCHDATA_SUCCESS, API_FETCHDATA_FAILURE } from
'./constants';
import { fetchDataFailure, fetchDataSuccess, fetchData } from './actions';
import fetchDataSaga from
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* eslint-disable react/prefer-stateless-function */
export class FetchData extends React. {
render() {
return (
<div>
</div>
);
}
}

FetchData.propTypes = {
dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
return {
dispatch,
};
}

export default connect(null, mapDispatchToProps)(FetchData);
