import React from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import { Course } from '../../services/content.service'

interface ModalConfirmPurchaseProps {
  isOpen: boolean
  onRequestClose: () => void
  courseId: Course
}

const ModalConfirmPurchase: React.FC<ModalConfirmPurchaseProps> = ({
  isOpen,
  onRequestClose,
  courseId,
}) => {
  const handleConfirmPurchase = async () => {
    try {
      // Realizar una solicitud a la API para guardar la compra en la base de datos
      await axios.post('http://localhost:3000/api/v1/:id/buy/:contentId', {
        courseId: courseId,
      })

      // Cerrar el modal después de que la compra sea exitosa
      onRequestClose()
    } catch (error) {
      // Manejar errores en caso de que la compra no se pueda guardar
      console.error('Error al confirmar la compra:', error)
    }
  }

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
  )
}

export default ModalConfirmPurchase
