import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ component: Component }) => {
  const [authStatus] = useContext(AuthContext);

  return authStatus ? <Component /> : <h1>Not logged in!</h1>;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
