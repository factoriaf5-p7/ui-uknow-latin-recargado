import React, { useState } from "react";
import Modal from "react-modal";
import ModalLogin from "./ModalLogin";
import ModalNoBalance from "./ModalNoBalance";
import ModalConfirmPurchase from "./ModalConfirmPurchase";

interface ModalPurchaseProps {
  isOpen: boolean;
  onRequestClose: () => void;
  isLoggedIn: boolean;
  hasEnoughBalance: boolean;
  onLogin: () => void;
}

export const ModalPurchase: React.FC<ModalPurchaseProps> = ({
  isOpen,
  onRequestClose,
  isLoggedIn,
  hasEnoughBalance,
  onLogin,
}) => {
  // Estados para controlar la apertura de diferentes modales
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showNoBalanceModal, setShowNoBalanceModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleBuyClick = () => {
    if (isLoggedIn) {
      if (hasEnoughBalance) {
        // Si el usuario está logueado y tiene suficiente saldo, muestra el modal de confirmación
        setShowConfirmModal(true);
      } else {
        // Si el usuario está logueado pero no tiene suficiente saldo, muestra el modal de saldo insuficiente
        setShowNoBalanceModal(true);
      }
    } else {
      // Si el usuario no está logueado, muestra el modal de inicio de sesión
      onLogin();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Purchase course"
    >
      <h1>Title</h1>
      <h2>Author</h2>
      <h3>Rating</h3> {/* traer rating */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, labore
        id temporibus ratione voluptatem deserunt ducimus ea alias ad. Maiores
        assumenda sequi quam id sint neque iure at accusantium animi.
      </p>
      <div>
        <h1>$30</h1>
        <button onClick={handleBuyClick}>Buy</button>
        <button onClick={onRequestClose}>Close</button>
      </div>
      <div>
        <h4>Comments</h4>
        <p>///////</p> {/* ver de traer la lógica de los comentarios aquí */}
      </div>
      {/* ModalLogin */}
      {showLoginModal && (
        <ModalLogin
          isOpen={true}
          onRequestClose={() => setShowLoginModal(false)}
        />
      )}
      {/* ModalNoBalance */}
      {showNoBalanceModal && (
        <ModalNoBalance
          isOpen={true}
          onRequestClose={() => setShowNoBalanceModal(false)}
        />
      )}
      {/* ModalConfirmPurchase */}
      {showConfirmModal && (
        <ModalConfirmPurchase
          isOpen={true}
          onRequestClose={() => setShowConfirmModal(false)}
          courseId="curso_id" // Reemplazar 'curso_id' con el ID del curso que se está comprando
        />
      )}
    </Modal>
  );
};
