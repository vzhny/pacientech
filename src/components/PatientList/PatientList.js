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
  }, []);

  const numberOfPatients = patients.length;
  const patientsListItems = patients.map((patient, index) => (
    <PatientListItem key={patient.patientId} index={index} patient={patient} />
  ));

  const patientList = (
    <ListGroup>
      {numberOfPatients ? (
        patientsListItems
      ) : (
        <ListGroupItem className="text-center text-primary">
          <h1 className="my-3">Please add a patient!</h1>
          <p>
            Begin by clicking <span className="text-info">&#39;Add a New Patient&#39;</span> in the
            navigation bar.
          </p>
        </ListGroupItem>
      )}
    </ListGroup>
  );

  return isLoading ? <Loader /> : patientList;
};

export default PatientList;
