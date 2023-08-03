import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { updateUserProfile, UserData } from "../../services/user.service"; 

const Profile = () => {
    const [userData, setUserData] = useState<UserData>({
        Name: "",
        user_name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userId = localStorage.getItem("user_id");
        if (!userId) {
            console.error("Error: No se encontró el user_id en localStorage.");
            return;
        }

        try {
            await updateUserProfile(userId, userData);
            alert("Tus datos se han actualizado correctamente.");
        } catch (error) {
            const errorMessage = (error as Error).message;
            console.error("Error al actualizar el perfil:", errorMessage);
            alert("Hubo un error al actualizar tus datos. Por favor, intenta de nuevo.");
        }
    };
    return (
        <div className="container mt-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        value={userData.Name}
                        onChange={(e) => setUserData({ ...userData, Name: e.target.value })}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Apodo</Form.Label>
                    <Form.Control
                        type="text"
                        value={userData.user_name}
                        onChange={(e) => setUserData({ ...userData, user_name: e.target.value })}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        value={userData.password}
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Actualizar Datos
                </Button>
            </Form>
        </div>
    );
};

export default Profile;
