import React, { createContext, useContext, useState } from 'react';
import EnrollNowModal from '../Components/EnrollNowModel'; // Import your modal component

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <EnrollNowModal isOpen={isModalOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
};
