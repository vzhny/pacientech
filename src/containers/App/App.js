import React from 'react';
import { Router } from '@reach/router';
import { Container } from 'reactstrap';
import Navigation from '@/components/Navigation/Navigation';
import Landing from '@/pages/Landing/Landing';
import Dashboard from '@/pages/Dashboard/Dashboard';
import NotFound from '@/pages/NotFound/NotFound';
import styles from './App.module.scss';
import PrivateRoute from '@/auth/PrivateRoute';
import { UserProvider } from '@/auth/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Navigation />
      <Container>
        <Router className={styles.Main}>
          <Landing path="/" />
          <PrivateRoute component={Dashboard} path="/dashboard" />
          <NotFound default />
        </Router>
      </Container>
    </UserProvider>
  );
};

export default App;
