import { Button } from "react-bootstrap";
import Login from "../components/Login/Login";
import { Link } from "react-router-dom";
import './LoginPage.css'

export default function LoginPage() {
  return <div>
      <div className="logo-login">
      <img src="./src/assets/logo-uk.png" style={{ width: '200px'}} />
      </div>
      <Login/>
      <div className="login">
        <p>You do not have an account?</p>
        <Link to="/register">
        <Button variant="link" >Register me</Button>
        </Link>
      </div>
    </div>;
}



     