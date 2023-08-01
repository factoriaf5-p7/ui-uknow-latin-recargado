import React from "react";
import { useModal } from "./useModal";
import Modal from "./Modal";

const Modals: React.FC = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  
  return (
    <div>
      <button onClick={openModal1}>Buy</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola ese es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
    </div>
  );
};

export default Modals;
