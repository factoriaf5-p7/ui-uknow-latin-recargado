import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/user.service';
import './Login.css';
import { useUserContext } from '../Header/UserContext';

export default function Login() {
  const navigate = useNavigate();
  const initialState = { email: '', password: '' };
  const [formData, setFromData] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null); // Para almacenar el error
  const { setUserNameAfterLogin } = useUserContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFromData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Pa´ borrar el error antes de intentar iniciar de sesión
    try {
      const response = await authService.login(formData);
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('name', response.data.name);
      localStorage.setItem('wallet_balance', response.data.wallet_balance);
      console.log(response);

      setUserNameAfterLogin(response.data.name);
      navigate('/home-user');
      setFromData(initialState);
    } catch (error) {
      setError('Oops! Parece que algo salió mal. Revisa tu email y contraseña e inténtalo nuevamente'); // mensaje de error si no se puede iniciar sesión
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>} 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
}
