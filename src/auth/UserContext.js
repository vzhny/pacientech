import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false); // eslint-disable-line
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
