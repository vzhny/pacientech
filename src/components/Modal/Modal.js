import React, { useEffect } from 'react';
import { Modal as BootstrapModal, ModalHeader, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';

const Modal = ({ title, content, modalVisible, toggleModal }) => {
  useEffect(() => {}, [title, content]);

  return (
    <BootstrapModal isOpen={modalVisible} centered>
      <ModalHeader toggle={() => toggleModal()}>{title}</ModalHeader>
      <ModalBody>{content}</ModalBody>
    </BootstrapModal>
  );
};

Modal.defaultProps = {
  title: '',
  content: '',
  modalVisible: false,
  toggleModal: modalVisible => !modalVisible,
};

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  modalVisible: PropTypes.bool,
  toggleModal: PropTypes.func,
};

export default Modal;
