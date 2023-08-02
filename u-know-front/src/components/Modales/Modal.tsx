import React, { FC, ReactNode, MouseEvent, useEffect, useState } from "react";
import "./Modal.css";
import { Course, contentIdService } from "../../services/content.service";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
  courseId: string;
}

const Modal: FC<ModalProps> = ({ children, isOpen, closeModal, courseId }) => {
  const handleModalContainerClick = (e: MouseEvent) => e.stopPropagation();

  const [courseIdData, setCourseIdData] = useState<Course[]>([])

  useEffect(() => {
  const fetchCourseIdData = async (courseId: string) => {
    try {
      const courseData: Course[] = await contentIdService.getCourseById(courseId);
      setCourseIdData(courseData)
      console.log(courseData); // Aquí obtendrás los datos del curso específico

      // Puedes hacer lo que necesites con los datos del curso, por ejemplo, mostrarlos en el modal.
    } catch (error) {
      console.error('Error fetching course by ID:', error);
      // Maneja el error si es necesario
    }
  }
  fetchCourseIdData(courseId) // Llama a la función para obtener los cursos cuando el componente se monte
}, [courseId])
          


  return (
    <article className={`modal ${isOpen ? "is-open" : ""}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        <p>{courseId}</p>
        {courseIdData.map((course) => (
        <p> {course.price} </p>
        ))};
        {children}
      </div>
    </article>
  );
};

export default Modal;

