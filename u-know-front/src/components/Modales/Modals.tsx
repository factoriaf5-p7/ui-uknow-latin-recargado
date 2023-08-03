import React from "react";
import { useModal } from "./useModal";
import Modal from "./Modal";
import { Course } from "../../services/content.service";
import { FaShoppingCart } from "react-icons/fa";

export interface ModalsProps {
  courseData: Course; // Cambiar el tipo de dato según el ID de curso sea (string, number, o cualquier otro tipo)
}

const Modals: React.FC<ModalsProps> = ({ courseData }) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  return (
    <div>
      <button className="style-btn" onClick={openModal1}>
        <FaShoppingCart size={35} />
      </button>
      <Modal
        courseData={courseData}
        isOpen={isOpenModal1}
        closeModal={closeModal1}
        children={""}
      ></Modal>
    </div>
  );
};

export default Modals;
