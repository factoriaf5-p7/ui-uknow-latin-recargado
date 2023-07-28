import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/user.service';
import './Login.css';
import { useUserContext } from '../Header/UserContext';
 

export default function Login() {
  const navigate = useNavigate();
  const initialState = { email: '', password: '' };
  const [formData, setFromData] = useState({ email: '', password: '' });
  const { setUserNameAfterLogin } = useUserContext();

    const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
        setFromData({
            ...formData,
            [event.target.name]: event.target.value 
        })
    }
     const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log(formData)
    const response = await authService.login(formData);
    localStorage.setItem('token', response.data.access_token);

      localStorage.setItem('name', response.data.name)
      localStorage.setItem('wallet_balance', response.data.wallet_balance)
      //console.log(response)
      
      setUserNameAfterLogin(response.data.name);
       navigate('/home-user') 
       setFromData(initialState)    
    }

  return (
    <Form onSubmit={handleSubmit}>    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' value={formData.email} onChange={handleChange} type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' value={formData.password} onChange={handleChange} type="password" placeholder="Password" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
  }
