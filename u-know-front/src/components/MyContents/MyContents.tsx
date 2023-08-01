import { useEffect, useState } from "react";
import { Content, getUserContents } from "../../services/content.service";
import "./MyContents.css";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const MyContents = () => {
    const [contents, setContents] = useState<Content[]>([]);

    useEffect(() => {
        // Obtén el ID del usuario logueado desde el LocalStorage
        const user = localStorage.getItem("user_id");

        if (user) {
            fetchContents(user);
        } else {
            console.log('Usuario no ha iniciado sesión o ID no encontrado en LocalStorage.');
        }
    }, []);

    const fetchContents = async (user: string) => {
        try {
            const userContents = await getUserContents(user);
            setContents(userContents);
        } catch (error) {
            
            console.log('Error al obtener la lista');
        }
    };

    const handleDelete = async (contentId: string) => {
        try {
            const purchases = await getPurchasesByContentId(contentId); //primero traer las compras de los usuarios
            const canDelete = true; //el usuario esta autorizado a borrar puede borrar

            if (purchases.length === 0) { //si no hay compras
                // se llama a la API para borrar el contenido
                await deleteContent(contentId);

                // se va a actualiza la lista de contenidos después de borrar
                const updatedContents = contents.filter((content) => content._id !== contentId);
                setContents(updatedContents);
            } else {
                alert("No tienes permisos para borrar este contenido.");
            }
        } catch (error) {
            console.log('Error al borrar el contenido');
        }
    };

    return (
        <div>
            <div className="row">
                {contents.map((content) => (
                    <div key={content._id} className="col-md-4 mb-4">
                        <div className="card my-content-card my-content-card-50">
                            <div className="card-body">
                                <div className="content-header">
                                    <h5 className="card-title">{content.title}</h5>
                                    <div className="edit-delete-icons">
                                        <a href={`/editcontent`}><FaPencilAlt className="edit-icon" /></a>
                                        <span onClick={() => handleDelete(content._id)}><FaTrashAlt /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {contents.length === 2 && (
                <div className="alert alert-warning mt-3 mb-4 mx-5" role="alert"> 
                    ¡Excelente! Ya tienes 2 contenidos creados. ¡Sigue creando y compartiendo más!
                </div>
            )}
        </div>
    );
};



export default MyContents;
