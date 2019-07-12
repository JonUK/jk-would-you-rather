import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isAuthenticated ? (
      <SiteLayout><Component {...props} /></SiteLayout>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
);

function mapStateToProps({ authenticatedUser }) {

  const isAuthenticated = !!authenticatedUser;

  return {
    isAuthenticated
  };
}

export default connect(mapStateToProps)(PrivateRoute);
