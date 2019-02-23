import React, { useContext } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import { PatientContext } from '@/context/PatientContext';
import PropTypes from 'prop-types';

const DeletePatientModalContent = ({ name, index, toggleModal }) => {
  const { deletePatient } = useContext(PatientContext);

  const onConfirmDeletePatient = e => {
    e.preventDefault();

    deletePatient(index);
    toggleModal();
  };

  return (
    <Form>
      <FormGroup>
        <p className="text-primary text-center">Are you sure you want to delete {name}?</p>
        <p className="text-primary text-center">
          WARNING: this action <strong className="text-danger">cannot</strong> be undone!
        </p>
      </FormGroup>
      <Button color="success" onClick={e => onConfirmDeletePatient(e)} type="submit">
        Confirm
      </Button>
    </Form>
  );
};

DeletePatientModalContent.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default DeletePatientModalContent;
