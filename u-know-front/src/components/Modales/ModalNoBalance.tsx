import React from 'react';
import Modal from 'react-modal';

interface ModalNoBalanceProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalNoBalance: React.FC<ModalNoBalanceProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Insufficient Balance">
        <h1>uK</h1>
      <h2>No tienes suficiente dinero para comprar este curso</h2>
      <button onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
};

export default ModalNoBalance;
