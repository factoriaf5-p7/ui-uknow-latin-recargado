import { useNavigate } from 'react-router-dom'
import { Course } from '../../services/content.service'
import { useState } from 'react'
import ModalNoBalance from '../Modales/ModalNoBalance'
import ModalConfirmPurchase from '../Modales/ModalConfirmPurchase'

export interface BotonProps {
  courseData: Course // Cambiar el tipo de dato según el ID de curso sea (string, number, o cualquier otro tipo)
}

const BotonCompra: React.FC<BotonProps> = ({ courseData }) => {
  const walletBalance = localStorage.getItem('wallet_balance')
  const navigate = useNavigate()
  const [
    showInsufficientBalanceModal,
    setShowInsufficientBalanceModal,
  ] = useState(false)

  const [showConfirmPurchaseModal, setShowConfirmPurchaseModal] = useState(
    false,
  )

  const handleBuyCourse = () => {
    // Verificar si el usuario está logged in

    if (!localStorage.getItem('token')) {
      setTimeout(function () {
        alert('Debes iniciar sesión para comprar el curso')
      }, 0)
      navigate('/login')
    }

    // Verificar si el usuario tiene suficiente dinero en su wallet
    else if (walletBalance === null) {
      return
    } else if (parseInt(walletBalance) < courseData.price) {
      setShowInsufficientBalanceModal(true)
    } else {
      setShowConfirmPurchaseModal(true)
    }
  }

  return (
    <>
      <button onClick={handleBuyCourse}>Buy Course</button>

      <ModalNoBalance
        isOpen={showInsufficientBalanceModal}
        onRequestClose={() => setShowInsufficientBalanceModal(false)}
      />

      <ModalConfirmPurchase
        isOpen={showConfirmPurchaseModal}
        onRequestClose={() => setShowConfirmPurchaseModal(false)}
        courseId={courseData}
      />
    </>
  )
}

export default BotonCompra
