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
      <h1>Necesitas estar registrado para poder comprar este curso</h1>
      <button onClick={handleLoginClick}>Iniciar sesión</button>
      <button onClick={onRequestClose}>Cerrar</button>
      <button onClick={handleRegisterClick}>Registrarme</button>
    </Modal>
  );
};

export default ModalLogin;
