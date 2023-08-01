import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../../services/upload.service';

const ContentForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [content, setContent] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Obtener la fecha actual en formato YYYY-MM-DD
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const currentDate = `${year}-${month}-${day}`;

        // Crear un objeto con los datos del formulario
        const formData = {
            title,
            author,
            description,
            price,
            category,
            difficulty,
            content,
            creationDate: currentDate, // Fecha de creación obtenida automáticamente
            lastUpdateDate: currentDate, // Fecha de última actualización obtenida automáticamente
        };

        // Realizar la solicitud POST al backend con Axios
        axios.post('/api/content', formData)
            .then((response) => {
                // La solicitud fue exitosa, puedes realizar alguna acción adicional si es necesario
                console.log('Solicitud exitosa:', response.data);
            })
            .catch((error) => {
                // Si ocurrió un error en la solicitud, puedes manejarlo aquí
                console.error('Error en la solicitud:', error);
            });
    };

    return (
        <div className="container mt-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el título" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </Form.Group>

                {/* El campo de Autor está deshabilitado para que no se pueda editar */}
                <Form.Group className="mb-3" controlId="formAuthor">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" value={author} readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Descripción del Contenido</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Ingrese la descripción del contenido" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" step="0.01" placeholder="Ingrese el precio" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCategory">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la categoría" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDifficulty">
                    <Form.Label>Dificultad</Form.Label>
                    <Form.Control type="number" min="1" max="5" placeholder="Ingrese la dificultad" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContent">
                    <Form.Label>Contenido Completo</Form.Label>
                    <Form.Control as="textarea" rows={6} placeholder="Ingrese el contenido completo" value={content} onChange={(e) => setContent(e.target.value)} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    );
};

export default ContentForm;
