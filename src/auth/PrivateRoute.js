import React from 'react';
import PropTypes from 'prop-types';
import { UserConsumer } from './UserContext';

const PrivateRoute = ({ component: Component }) => (
  <UserConsumer>
    {({ user, setUser }) => (user ? <Component /> : <h1>Not logged in!</h1>)}
  </UserConsumer>
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
