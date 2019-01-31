import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = ({ children }) => {
  const [authStatus, updateAuthStatus] = useState(false);
  const value = { authStatus, updateAuthStatus };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
