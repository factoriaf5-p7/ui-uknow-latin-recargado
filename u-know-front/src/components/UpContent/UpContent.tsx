import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { CreateContent, ContentData } from "../../services/upload.service";
import "./UpContent.css";
import ContentEdit from "./ContentEdit";

const ContentForm = () => {
  //obtiene el nombre del usuario
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [dificulty, setDificulty] = useState(0);
  const [content, setContent] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: ContentData = {
      title,
      description,
      price,
      category,
      dificulty,
      content,
    };

    const user: string | null = localStorage.getItem("user_id");
    CreateContent(user, formData) //llama a la función de upload.service.ts
      .then((response) => {
        console.log("Solicitud exitosa:", response.data);
        setShowSuccessAlert(true);
        setShowErrorAlert(false);
        //limpia los campos
        setTitle("");
        setDescription("");
        setPrice(0);
        setCategory("");
        setDificulty(0);
        setContent("");
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setShowSuccessAlert(false);
        setShowErrorAlert(true);
      });
  };

  return (
    <div className="container mt-5">
      {showSuccessAlert && (
        <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
          ¡El contenido se cargó correctamente!
        </Alert>
      )}

      {showErrorAlert && (
        <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
          ¡Error al cargar el contenido! Por favor, inténtalo nuevamente más tarde.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Descripción del Contenido</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingrese la descripción del contenido"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            placeholder="Ingrese el precio"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la categoría"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDificulty">
          <Form.Label>Dificultad</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="5"
            placeholder="Ingrese la dificultad"
            value={dificulty}
            onChange={(e) => setDificulty(Number(e.target.value))}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContent">
  <Form.Label>Contenido Completo</Form.Label>
  <ContentEdit
    value={content}
    onChange={(val) => setContent(val)}
    required
  />
</Form.Group>


        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default ContentForm;
