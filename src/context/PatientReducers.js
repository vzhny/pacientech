export const SET_PATIENTS = 'SET_PATIENTS';
export const ADD_PATIENT = 'ADD_PATIENT';
export const UPDATE_PATIENT = 'UPDATE_PATIENT';
export const DELETE_PATIENT = 'DELETE_PATIENT';

const setPatients = (patients, state) => {
  return { patients };
};

const addPatient = (patient, state) => {
  const updatedPatients = [...state.patients];

  updatedPatients.push(patient);

  return { patients: updatedPatients };
};

const updatePatient = (patient, state) => {
  const { patientId: currentPatientId } = patient;
  const updatedPatients = [...state.patients];
  const updatedPatientIndex = updatedPatients.findIndex(
    ({ patientId }) => patientId === currentPatientId
  );

  updatedPatients[updatedPatientIndex] = patient;

  return { patients: updatedPatients };
};

const deletePatient = (patient, state) => {
  const { patientId: currentPatientId } = patient;
  let updatedPatients = [...state.patients];
  const updatedPatientIndex = updatedPatients.findIndex(
    ({ patientId }) => patientId === currentPatientId
  );

  updatedPatients = updatedPatients.splice(updatedPatientIndex, 1);

  return { patients: updatedPatients };
};

export const patientReducer = (state, action) => {
  switch (action.type) {
    case SET_PATIENTS:
      return setPatients(action.patients, state);
    case ADD_PATIENT:
      return addPatient(action.patient, state);
    case UPDATE_PATIENT:
      return updatePatient(action.patient, state);
    case DELETE_PATIENT:
      return deletePatient(action.patient, state);
    default:
      return state;
  }
};
