import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from '@/auth/PrivateRoute';
import { AuthProvider } from '@/context/AuthContext';
import Navigation from '@/components/Navigation/Navigation';
import Landing from '@/pages/Landing/Landing';
import Dashboard from '@/pages/Dashboard/Dashboard';
import NotFound from '@/pages/NotFound/NotFound';
import styles from './App.module.scss';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
      <Router className={styles.Main}>
        <Landing path="/" />
        <PrivateRoute component={Dashboard} path="/dashboard" />
        <NotFound default />
      </Router>
    </AuthProvider>
  );
};

export default App;
