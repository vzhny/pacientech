import React from 'react';
import { Router } from '@reach/router';
import Navigation from '@/components/Navigation/Navigation';
import Landing from '@/pages/Landing/Landing';
import NotFound from '@/pages/NotFound/NotFound';
import styles from './App.module.scss';
import UserProvider from '@/auth/UserProvider';

const App = () => {
  return (
    <UserProvider>
      <Navigation />
      <Router className={styles.Main}>
        <Landing path="/" />
        <NotFound default />
      </Router>
    </UserProvider>
  );
};

export default App;
