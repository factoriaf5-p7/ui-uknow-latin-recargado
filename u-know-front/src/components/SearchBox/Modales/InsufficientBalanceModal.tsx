// InsufficientBalanceModal.tsx
import React from 'react';

interface InsufficientBalanceModalProps {
  onClose: () => void;
}

const InsufficientBalanceModal: React.FC<InsufficientBalanceModalProps> = ({ onClose }) => {
  return (
    <div>
      <h2>You have <b>no balance</b> to buy the course</h2>

      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default InsufficientBalanceModal;
