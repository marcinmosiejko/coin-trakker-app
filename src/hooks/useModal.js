import { useState } from 'react';

const useModal = (initialState = false) => {
  const [isOpen, handleModalState] = useState(initialState);

  const handleOpenModal = () => {
    console.log('test');
    handleModalState(true);
  };
  const handleCloseModal = () => {
    handleModalState(false);
  };

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
