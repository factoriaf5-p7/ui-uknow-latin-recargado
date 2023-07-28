
import React from 'react';

interface ConfirmPurchaseModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmPurchaseModal: React.FC<ConfirmPurchaseModalProps> = ({ onClose, onConfirm }) => {
  return (
    <div>
      <h2> You are about<b>to buy</b> the next course</h2>
    
      <button onClick={onConfirm}>It's OK</button> // ACA APLICAR LOGICA PARA QUE LO GUARDE EN CONTENIDO DE USUARIO CON UN POST
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default ConfirmPurchaseModal;
