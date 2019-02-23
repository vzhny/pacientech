import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext([{ status: false, token: '' }, () => {}]);

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ status: false, token: '' });

  return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
