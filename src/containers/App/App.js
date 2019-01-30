import React from 'react';
import { Router } from '@reach/router';
import Navigation from '@/components/Navigation/Navigation';
import Landing from '@/pages/Landing/Landing';
import NotFound from '@/pages/NotFound/NotFound';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.App}>
    <Navigation />
    <Router>
      <Landing path="/" />
      <NotFound default />
    </Router>
  </div>
);

export default App;
