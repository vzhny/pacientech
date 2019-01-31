import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext([false, () => {}]);

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = ({ children }) => {
  const [authStatus, updateAuthStatus] = useState(false);

  return (
    <AuthContext.Provider value={[authStatus, updateAuthStatus]}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
