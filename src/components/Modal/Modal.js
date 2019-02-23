import React, { useEffect } from 'react';
import { Modal as BootstrapModal, ModalHeader, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';

const Modal = ({ title, content, modalVisible, toggleModal }) => {
  const handleEscKeyPress = e => {
    const keys = {
      27: () => {
        e.preventDefault();
        toggleModal();
        window.removeEventListener('keyup', handleEscKeyPress);
      },
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleEscKeyPress);

    return () => {
      window.removeEventListener('keyup', handleEscKeyPress);
    };
  }, [title, content]);

  return (
    <BootstrapModal centered data-testid="modal-backdrop" isOpen={modalVisible}>
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
