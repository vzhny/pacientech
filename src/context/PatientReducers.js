export const SET_PATIENTS = 'SET_PATIENTS';
export const ADD_PATIENT = 'ADD_PATIENT';
export const UPDATE_PATIENT = 'UPDATE_PATIENT';
export const DELETE_PATIENT = 'DELETE_PATIENT';

const setPatients = (patients, state) => {
  return { patients };
};

const addPatient = (patient, state) => {
  const latestPatients = [...state.patients];

  latestPatients.push(patient);

  return { patients: latestPatients };
};

const updatePatient = (patientIndex, updatedPatient, state) => {
  const latestPatients = [...state.patients];

  latestPatients[patientIndex] = updatedPatient;

  return { patients: latestPatients };
};

const deletePatient = (patientIndex, state) => {
  const latestPatients = [...state.patients];

  latestPatients.splice(patientIndex, 1);

  return { patients: latestPatients };
};

export const patientReducer = (state, action) => {
  switch (action.type) {
    case SET_PATIENTS:
      return setPatients(action.patients, state);
    case ADD_PATIENT:
      return addPatient(action.patient, state);
    case UPDATE_PATIENT:
      return updatePatient(action.patientIndex, state);
    case DELETE_PATIENT:
      return deletePatient(action.patientIndex, state);
    default:
      return state;
  }
};
