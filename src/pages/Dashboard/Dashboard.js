import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import { PatientProvider } from '@/context/PatientContext';
import { dashboard } from './Dashboard.module.scss';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard | Pacientech';
  }, []);

  return (
    <Container className={dashboard}>
      <PatientProvider>
        <h1>Dashboard Page</h1>
      </PatientProvider>
    </Container>
  );
};

export default Dashboard;
