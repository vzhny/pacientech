import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import styles from './Modal.module.scss';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(modalNode);

    return modalRoot.removeChild(modalNode);
  });

  return ReactDOM.createPortal(
    <div>
      <p>Modal Component</p>
    </div>,
    modalNode
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Modal;
