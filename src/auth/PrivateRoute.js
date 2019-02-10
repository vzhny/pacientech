import React, { useLayoutEffect, useContext } from 'react';
import { navigate } from '@reach/router';
import PropTypes from 'prop-types';
import Landing from '@/pages/Landing/Landing';
import { AuthContext } from './AuthContext';

const Redirect = () => {
  useLayoutEffect(() => {
    navigate('/');
  });

  return <Landing />;
};

const PrivateRoute = ({ component: Component }) => {
  const [auth] = useContext(AuthContext);

  return auth.status ? <Component /> : <Redirect />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
