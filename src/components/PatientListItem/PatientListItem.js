import React, { useState, useContext } from 'react';
import {
  ListGroupItem,
  ListGroupItemHeading,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import Modal from '@/components/Modal/Modal';
import DeletePatientModalContent from '@/components/PatientListItem/DeletePatientModalContent/DeletePatientModalContent';
import { PatientContext } from '@/context/PatientContext';
import { inputBorder } from './PatientListItem.module.scss';

// TODO: remove this once sessions and updatePatient are used
/* eslint-disable no-unused-vars */

const PatientListItem = ({ patient, index }) => {
  const {
    patientId,
    name,
    address,
    phoneNumbers,
    email,
    reason,
    diagnosis,
    notes,
    sessions,
    totalNumberOfSessions,
    lastVisit,
  } = patient;

  const { updatePatient } = useContext(PatientContext);

  const [isExpanded, toggleExpanded] = useState(false);
  const [editable, toggleEditing] = useState(false);
  const [modal, setModalProps] = useState({});
  const [modalVisible, toggleModal] = useState(false);

  // TODO: temporary modal contents to test click functionality
  const openConfirmDeleteModal = id => {
    setModalProps({
      title: 'Confirm Delete',
      content: <DeletePatientModalContent index={index} name={name} toggleModal={toggleModal} />,
    });

    toggleModal(!modalVisible);
  };

  const submitEditedPatient = () => {
    toggleEditing(!editable);
  };

  const expandedPatientInformation = (
    <>
      <ListGroupItem className="text-primary" color={editable ? 'success' : ''}>
        <ListGroupItemHeading className="d-flex justify-content-between">
          <p>
            <span>Patient ID: </span>
            <span>{patientId}</span>
          </p>
          <ButtonGroup size="sm">
            <Button
              color="danger"
              disabled={editable}
              onClick={() => openConfirmDeleteModal(patientId)}
              style={editable ? { cursor: 'not-allowed' } : {}}
            >
              Delete
            </Button>
            <Button color="info" onClick={() => submitEditedPatient()}>
              {editable ? 'Save' : 'Edit'}
            </Button>
            <Button
              color="primary"
              disabled={editable}
              onClick={() => toggleExpanded(!isExpanded)}
              style={editable ? { cursor: 'not-allowed' } : {}}
            >
              {isExpanded ? 'Close' : 'Expand'}
            </Button>
          </ButtonGroup>
        </ListGroupItemHeading>
        <Form>
          <FormGroup row>
            <Col lg="6">
              <Label for="name">Name:</Label>
              <Input disabled className={inputBorder} name="name" type="text" value={name} />
            </Col>
            <Col lg="3">
              <Label for="phoneNumbers">Phone Numbers:</Label>
              <Input className={inputBorder} name="phoneNumbers" type="select">
                {phoneNumbers.map(({ _id, type, number }) => (
                  <option key={type}>{number}</option>
                ))}
              </Input>
            </Col>
            <Col lg="3">
              <Label for="lastVisit">Last Visit:</Label>
              <Input
                className={inputBorder}
                disabled={!editable}
                name="lastVisit"
                type="text"
                value={lastVisit}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col lg="6">
              <Label for="address">Address:</Label>
              <Input
                className={inputBorder}
                disabled={!editable}
                name="address"
                type="text"
                value={address}
              />
            </Col>
            <Col lg="6">
              <Label for="email">Email:</Label>
              <Input
                className={inputBorder}
                disabled={!editable}
                name="email"
                type="email"
                value={email}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col lg="6">
              <Label for="diagnosis">Diagnosis:</Label>
              <Input
                className={inputBorder}
                disabled={!editable}
                name="diagnosis"
                rows="3"
                type="textarea"
                value={diagnosis}
              />
            </Col>
            <Col lg="6">
              <Label for="reason">Reason(s) For Visit:</Label>
              <Input
                className={inputBorder}
                disabled={!editable}
                name="reason"
                rows="3"
                type="textarea"
                value={reason}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col>
              <Label for="notes">Notes:</Label>
              <Input
                className={inputBorder}
                disabled={!editable}
                name="notes"
                rows="6"
                type="textarea"
                value={notes}
              />
            </Col>
          </FormGroup>
        </Form>
      </ListGroupItem>
      <Modal
        content={modal.content}
        modalVisible={modalVisible}
        title={modal.title}
        toggleModal={toggleModal}
      />
    </>
  );

  const patientInformation = (
    <ListGroupItem className="text-primary">
      <ListGroupItemHeading className="d-flex justify-content-between">
        <p>
          <span>Patient ID: </span>
          <span>{patientId}</span>
        </p>
        <ButtonGroup size="sm">
          <Button color="primary" onClick={() => toggleExpanded(!isExpanded)}>
            Expand
          </Button>
        </ButtonGroup>
      </ListGroupItemHeading>
      <Form>
        <FormGroup row>
          <Col lg="6">
            <Label for="name">Name:</Label>
            <Input
              readOnly
              className={inputBorder}
              disabled={!editable}
              name="name"
              type="text"
              value={name}
            />
          </Col>
          <Col lg="3">
            <Label for="phoneNumbers">Phone Numbers:</Label>
            <Input className={inputBorder} name="phoneNumbers" type="select">
              {phoneNumbers.map(({ _id, type, number }) => (
                <option key={type}>{number}</option>
              ))}
            </Input>
          </Col>
          <Col lg="3">
            <Label for="lastVisit">Last Visit:</Label>
            <Input
              className={inputBorder}
              disabled={!editable}
              name="lastVisit"
              type="text"
              value={lastVisit}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col lg="6">
            <Label for="diagnosis">Diagnosis:</Label>
            <Input
              className={inputBorder}
              disabled={!editable}
              name="diagnosis"
              rows="2"
              type="textarea"
              value={diagnosis}
            />
          </Col>
          <Col lg="6">
            <Label for="notes">Notes:</Label>
            <Input
              className={inputBorder}
              disabled={!editable}
              name="notes"
              rows="2"
              type="textarea"
              value={notes}
            />
          </Col>
        </FormGroup>
      </Form>
    </ListGroupItem>
  );

  return isExpanded ? expandedPatientInformation : patientInformation;
};

PatientListItem.propTypes = {
  patient: PropTypes.shape({
    lastVisit: PropTypes.string.isRequired,
    totalNumberOfSessions: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    patientId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumbers: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ),
    email: PropTypes.string,
    reason: PropTypes.string.isRequired,
    diagnosis: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        number: PropTypes.number.isRequired,
        confirmed: PropTypes.bool.isRequired,
        _id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        notes: PropTypes.string.isRequired,
      })
    ).isRequired,
    createdBy: PropTypes.string,
    __v: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default PatientListItem;
