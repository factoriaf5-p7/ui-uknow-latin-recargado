import { Button } from "react-bootstrap";
import Login from "../components/Login/Login";
import { Link } from "react-router-dom";
import './StylePages/LoginPage.css'

export default function LoginPage() {
  return <div>
      <div className="logo-login">
        <img src="./src/assets/logo-uk.png" style={{ width: '200px'}} />
      </div>
      <Login/>
      <div className="login">
        <p>¿No tienes cuenta?</p>
        <Link to="/register">
        <Button variant="link" >Regístrate</Button>
        </Link>
      </div>
    </div>;
}



     