import React, { useEffect } from 'react';
import { Button, Modal as BootstrapModal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

const Modal = ({ title, confirmBtn, content, modalVisible, toggleModal }) => {
  useEffect(() => {}, [title, confirmBtn, content]);

  return (
    <BootstrapModal isOpen={modalVisible} centered>
      <ModalHeader toggle={() => toggleModal()}>{title}</ModalHeader>
      <ModalBody>{content}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => toggleModal()}>
          {confirmBtn}
        </Button>
        <Button color="secondary" onClick={() => toggleModal()}>
          Cancel
        </Button>
      </ModalFooter>
    </BootstrapModal>
  );
};

Modal.defaultProps = {
  title: '',
  confirmBtn: 'OK',
  content: '',
  modalVisible: false,
  toggleModal: modalVisible => !modalVisible,
};

Modal.propTypes = {
  title: PropTypes.string,
  confirmBtn: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  modalVisible: PropTypes.bool,
  toggleModal: PropTypes.func,
};

export default Modal;
