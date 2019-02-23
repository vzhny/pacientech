import React, { useState, useContext, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { PatientContext } from '@/context/PatientContext';
import Loader from '@/components/Loader/Loader';
import PatientListItem from '@/components/PatientListItem/PatientListItem';
import mockPatients from '@/mock/patients';

const PatientList = () => {
  const { patients, setPatients } = useContext(PatientContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setPatients(mockPatients);
    setLoading(false);
  }, [patients]);

  const numberOfPatients = patients.length;
  const patientsListItems = patients.map(patient => (
    <PatientListItem key={patient.patientId} patient={patient} />
  ));

  const patientList = (
    <ListGroup>
      {numberOfPatients ? (
        patientsListItems
      ) : (
        <ListGroupItem className="d-flex justify-content-center text-primary">
          <h1 className="m-0">Please add a patient!</h1>
        </ListGroupItem>
      )}
    </ListGroup>
  );

  return isLoading ? <Loader /> : patientList;
};

export default PatientList;
