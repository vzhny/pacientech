import React, { useEffect } from 'react';
import { Button, Modal as BootstrapModal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Loader from '@/components/Loader/Loader';
import PropTypes from 'prop-types';

const Modal = ({ title, confirmBtn, content, modalVisible, toggleModal }) => {
  useEffect(() => {}, [title, confirmBtn, content]);

  return (
    <BootstrapModal isOpen={modalVisible} centered>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        <Loader />
        {content}
      </ModalBody>
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
  modalVisible: false,
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  confirmBtn: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Modal;
