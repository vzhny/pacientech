import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import { dashboard } from './Dashboard.module.scss';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard | Pacientech';
  }, []);

  return (
    <Container className={dashboard}>
      <h1>Dashboard Page</h1>
    </Container>
  );
};

export default Dashboard;
