import React from 'react'
import { useModal } from './useModal'
import Modal from './Modal'

export interface ModalsProps {
  courseId: string // Cambiar el tipo de dato según el ID de curso sea (string, number, o cualquier otro tipo)
}

const Modals: React.FC<ModalsProps> = ({ courseId }) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false)

  return (
    <div>
      <button onClick={openModal1}>Buy</button>
      <Modal courseId={courseId} isOpen={isOpenModal1} closeModal={closeModal1}></Modal>
    </div>
  )
}

export default Modals
