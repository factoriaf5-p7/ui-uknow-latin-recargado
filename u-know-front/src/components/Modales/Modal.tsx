import React, { FC, ReactNode, MouseEvent } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e: MouseEvent) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen ? "is-open" : ""}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;

