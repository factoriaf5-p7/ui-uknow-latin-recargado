import React from "react";
import Modal from "react-modal";
import { Course, buyContentUser } from "../../services/content.service";
import { useNavigate } from "react-router-dom";

interface ModalConfirmPurchaseProps {
  isOpen: boolean;
  onRequestClose: () => void;
  courseId: Course;
}

const ModalConfirmPurchase: React.FC<ModalConfirmPurchaseProps> = ({
  isOpen,
  onRequestClose,
  courseId,
}) => {
  const navigate = useNavigate();
  const handleConfirmPurchase = async () => {
    const id: string | null = localStorage.getItem("user_id");
    if (id !== null) {
      // aquí quiero usar el servicio buyContentUser pasandole el parametro "id"
      // y el parametro "courseId._id"
      try {
        await buyContentUser(id, courseId._id);

        const walletBalanceStr: string | null =
          localStorage.getItem("wallet_balance");
        const walletBalance = Number(walletBalanceStr);
        const updatedWalletBalance = walletBalance - courseId.price;
        localStorage.setItem("wallet_balance", updatedWalletBalance.toString());
        setTimeout(function () {
          alert(
            `Felicitaciones el curso ha sido comprado satisfactoriamente!!!`
          );
        }, 0);
        navigate("/contentcart");
      } catch (error) {
        // Si hubo un error al realizar la compra, puedes manejarlo aquí
        console.error(error);
        onRequestClose();

        // También puedes mostrar un mensaje de error o cualquier otra acción que desees
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Purchase"
    >
      <h1>Title</h1>
      <h2>You are about to buy the next course</h2>
      <button onClick={handleConfirmPurchase}>it's OK</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default ModalConfirmPurchase;
