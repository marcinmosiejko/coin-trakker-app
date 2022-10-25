import React from 'react';
import { Wrapper, Relative } from './Modal.styles';
// import Button from 'components/atoms/Button/Button';

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
      <Relative>
        <button onClick={handleCloseModal}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </Relative>
      {children}
      {/* <Button onClick={handleCloseModal}>Close</Button> */}
    </Wrapper>
  );
};

export default Modal;
