import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

interface ModalLoginProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ isOpen, onRequestClose }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // me dirige a la página de inicio de sesión
  };

  const handleRegisterClick = () => {
    navigate('/register'); // me dirige a la página de registro
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Login">
      <h1>You have to be registered or log in to buy the course</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={onRequestClose}>Close</button>
      <button onClick={handleRegisterClick}>Register</button>
    </Modal>
  );
};

export default ModalLogin;
