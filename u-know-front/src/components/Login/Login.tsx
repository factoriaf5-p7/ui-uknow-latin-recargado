import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ChangeEvent, FormEvent, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { authService } from '../../services/auth.service';
import { useUserContext } from '../../UserContext';

export default function Login() {
  const navigate = useNavigate()
  const initialState = { email:'', password:''}
  const [formData, setFromData] = useState({ email: '', password: '', })
  const { setUserNameAfterLogin } = useUserContext();

    const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
        setFromData({
            ...formData,
            [event.target.name]: event.target.value 
        })
    }
    const handleSubmit = async (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();  
        console.log(formData)
         const response = await authService.login(formData)
      localStorage.setItem('token', response.data.access_token)
      setUserNameAfterLogin(formData.email);
       navigate('/home-user') 
       setFromData(initialState)  
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' value={formData.email} onChange={handleChange} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' value={formData.password} onChange={handleChange} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
  );
}
