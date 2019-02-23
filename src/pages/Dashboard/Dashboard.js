import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import PatientList from '@/components/PatientList/PatientList';
import { PatientProvider } from '@/context/PatientContext';
import { dashboard } from './Dashboard.module.scss';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard | Pacientech';
  }, []);

  return (
    <Container className={dashboard}>
      <PatientProvider>
        <PatientList />
      </PatientProvider>
    </Container>
  );
};

export default Dashboard;
