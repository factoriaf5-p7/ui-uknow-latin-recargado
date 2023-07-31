import React from 'react';
import Modal from 'react-modal';

interface ModalNoBalanceProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalNoBalance: React.FC<ModalNoBalanceProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Insufficient Balance">
        <h1>$</h1>
      <h2>You have no balance to buy the course</h2>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ModalNoBalance;
