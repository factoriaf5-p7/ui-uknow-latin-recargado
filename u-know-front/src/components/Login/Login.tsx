import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/user.service';
import './Login.css';
import { useUserContext } from '../Header/UserContext';
import { Image } from 'react-bootstrap';

export default function Login() {
  const navigate = useNavigate();
  const initialState = { email: '', password: '' };
  const [formData, setFromData] = useState({ email: '', password: '' });
  const { setUserNameAfterLogin } = useUserContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFromData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log(formData)
    const response = await authService.login(formData);
    localStorage.setItem('token', response.data.access_token);

    setUserNameAfterLogin(formData.email);

    localStorage.setItem('name', response.data.name);
    localStorage.setItem('wallet_balance', response.data.wallet_balance);
    //console.log(response)

    setUserNameAfterLogin(response.data.name);
    navigate('/home-user');
    setFromData(initialState);
    navigate('/home-user');
    setFromData(initialState);
  };

  // Genera un avatar aleatorio con iniciales basado en el nombre del usuario
  const getRandomAvatar = () => {
    const initials = formData.email
      .split('@')[0] // Obtiene el nombre de usuario antes del '@'
      .split('.')
      .map((namePart) => namePart.charAt(0).toUpperCase()) // Toma la primera letra de cada parte del nombre y la convierte a mayúscula
      .join(''); // Une las iniciales

    return <Avatar name={initials} size="80" round />;
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Avatar */}
      {formData.email ? (
        getRandomAvatar()
      ) : (
        <Image
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
          alt="Avatar"
          roundedCircle
          style={{ width: '80px', height: '80px', margin: '0 auto', display: 'block' }}
        />
      )}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dirección de correo electrónico</Form.Label>
        <Form.Control
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Ingresa tu correo electrónico"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Contraseña"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
}
