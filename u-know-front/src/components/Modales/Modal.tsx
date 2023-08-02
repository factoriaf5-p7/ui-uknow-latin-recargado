import React, { FC, ReactNode, MouseEvent } from "react";
import "./Modal.css";
import { Course } from "../../services/content.service";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
  courseData: Course;
}

const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  closeModal,
  courseData,
}) => {
  const handleModalContainerClick = (e: MouseEvent) => e.stopPropagation();

  return (
    <article
      className={`modal ${isOpen ? "is-open" : ""}`}
      onClick={closeModal}
    >
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        <h1>{courseData.title}</h1>
        <p>{courseData.ratings}</p>
        <p>{courseData.description}</p>
        <h2>{courseData.price}</h2>
        {courseData.comments.length > 0 && (
          <div>
            <h3>Coments:</h3>
            {courseData.comments.map((comment, index) => (
              <div key={index}>
                <p>Title: {comment.title}</p>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
        )}
        <p>boton</p>
        {children}
      </div>
    </article>
  );
};

export default Modal;
