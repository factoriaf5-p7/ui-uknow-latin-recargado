import Form from "react-bootstrap/Form";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { registerService } from "../../services/user.service"; 

export default function Register() {
  const initialState = { name: "", email: "", password: "" };
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFromData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    setError("");
    try {
      const response = await registerService.signup(formData);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      setFromData(initialState);
      navigate("/login");
    } catch (err) {
      setError("El correo o usuario ya existe");
    }
  };

  return (
    <>
      <Form className="registerUser" onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Nombre "
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electónico</Form.Label>
          <Form.Control
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="mail"
            placeholder="nombre@ejemplo.com"
            className="bg-transparent"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="contraseña"
            className="bg-transparent"
            required
          />
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
         >
        Enviar
        </Button>
      </Form>
    </>
  );
}
