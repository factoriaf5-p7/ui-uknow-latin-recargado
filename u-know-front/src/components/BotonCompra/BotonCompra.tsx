import { Navigate, useNavigate } from "react-router-dom";
import { Course } from "../../services/content.service";

export interface BotonProps {
  courseData: Course; // Cambiar el tipo de dato según el ID de curso sea (string, number, o cualquier otro tipo)
}

const BotonCompra: React.FC<BotonProps> = ({ courseData }) => {
  const walletBalance = localStorage.getItem("wallet_balance");
  const navigate = useNavigate();

  const handleBuyCourse = () => {
    // Verificar si el usuario está logged in

    if (!localStorage.getItem("token")) {
      return navigate("/login");
    }

    // Verificar si el usuario tiene suficiente dinero en su wallet
    else if (walletBalance === null) {
      return;
    } else if (parseInt(walletBalance) < courseData.price) {
      alert("I'm sorry you have insufficient balance");
    } else {
      return navigate("/contentcart");
    }
  };
  return <button onClick={handleBuyCourse}>Buy Course</button>;
};

export default BotonCompra;
