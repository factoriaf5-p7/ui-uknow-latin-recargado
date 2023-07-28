
import React from 'react';

interface NotLoggedInModalProps {
  onClose: () => void;
}

const NotLoggedInModal: React.FC<NotLoggedInModalProps> = ({ onClose }) => {
  return (
    <div>
      <h2>You have <b> to be registered </b> or log in to buy the course</h2>
    
      <button onClick={onClose}>x</button>
    </div>
  );
};

export default NotLoggedInModal;
