import React, { useState } from 'react';
import ConfirmPurchaseModal from './ConfirmPurchaseModal';
import NotLoggedInModal from './NotLoggedInModal';
import InsufficientBalanceModal from './InsufficientBalanceModal';

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLogged: boolean;
  hasBalance: boolean;
}

const ContentModal: React.FC<ContentModalProps> = ({ isOpen, onClose, isLogged, hasBalance }) => {
  
 
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showNotLoggedInModal, setShowNotLoggedInModal] = useState(false);
  const [showInsufficientBalanceModal, setShowInsufficientBalanceModal] = useState(false);

  const handleBuyClick = () => {
    if (isLogged) {
      if (hasBalance) {
        
        setShowConfirmModal(true);
      } else {
       
        setShowInsufficientBalanceModal(true);
      }
    } else {
     
      setShowNotLoggedInModal(true);
    }
  };

  const handleConfirmPurchase = () => {
    // Lógica para realizar la compra
    console.log('Compra realizada');
    // Aquí puedes mostrar un mensaje o realizar alguna acción adicional después de la compra
    // Correcto: Llamada al hook en el nivel superior del componente
    setShowConfirmModal(false);
    onClose();
  };

  return (
    <div>
      <div>
        <h2>Contenido del Modal Principal</h2>
        <p>Este es el contenido del modal principal.</p>
        <button onClick={handleBuyClick}>Comprar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>

      {/* Modal de Confirmación */}
      {showConfirmModal && (
        <ConfirmPurchaseModal onClose={() => setShowConfirmModal(false)} onConfirm={handleConfirmPurchase} />
      )}

      {/* Modal de Usuario no Logueado */}
      {showNotLoggedInModal && <NotLoggedInModal onClose={() => setShowNotLoggedInModal(false)} />}

      {/* Modal de Saldo Insuficiente */}
      {showInsufficientBalanceModal && <InsufficientBalanceModal onClose={() => setShowInsufficientBalanceModal(false)} />}
    </div>
  );
};

export default ContentModal;


