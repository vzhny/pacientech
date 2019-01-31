import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // eslint-disable-line

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default UserProvider;
