import React, { useState } from 'react';
import { Router } from '@reach/router';
import UserContext from '@/auth/UserContext';
import Navigation from '@/components/Navigation/Navigation';
import Landing from '@/pages/Landing/Landing';
import NotFound from '@/pages/NotFound/NotFound';
import styles from './App.module.scss';

const App = () => {
  const [user, setUser] = useState(null); // eslint-disable-line

  return (
    <UserContext.Provider value={user}>
      <Navigation />
      <Router className={styles.Main}>
        <Landing path="/" />
        <NotFound default />
      </Router>
    </UserContext.Provider>
  );
};

export default App;
