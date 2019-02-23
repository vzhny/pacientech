import React, { useReducer } from 'react';
import {
  patientReducer,
  SET_PATIENTS,
  ADD_PATIENT,
  UPDATE_PATIENT,
  DELETE_PATIENT,
} from '@/context/PatientReducers';
import PropTypes from 'prop-types';

export const PatientContext = React.createContext({
  patients: [],
  setPatients: patients => {},
  addPatient: patient => {},
  updatePatient: patient => {},
  deletePatient: patient => {},
});

export const PatientProvider = ({ children }) => {
  const [state, dispatch] = useReducer(patientReducer, { patients: [] });

  const setPatients = patients => {
    dispatch({ type: SET_PATIENTS, patients });
  };

  const addPatient = patient => {
    dispatch({ type: ADD_PATIENT, patient });
  };

  const updatePatient = patient => {
    dispatch({ type: UPDATE_PATIENT, patient });
  };

  const deletePatient = patient => {
    dispatch({ type: DELETE_PATIENT, patient });
  };

  return (
    <PatientContext.Provider
      value={{
        patients: state.patients,
        setPatients,
        addPatient,
        updatePatient,
        deletePatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

PatientProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
