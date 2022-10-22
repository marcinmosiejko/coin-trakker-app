import React from 'react';
import { Wrapper } from './Modal.styles';
import Button from 'components/atoms/Button/Button';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(2px)',
  },
};

const Modal = ({ isOpen, handleCloseModal, children }) => {
  return (
    <Wrapper
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      appElement={document.querySelector('#root')}
      style={customStyles}
    >
      {children}
      <Button onClick={handleCloseModal}>Close</Button>
    </Wrapper>
  );
};

export default Modal;
