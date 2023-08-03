import { useEffect, useState } from "react";
import { Content, getUserContents } from "../../services/content.service";
import "./MyContents.css";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";


const MyContents = () => {
    const [contents, setContents] = useState<Content[]>([]);
    const [showNoContentAlert, setShowNoContentAlert] = useState(false);

    useEffect(() => {
        // Obtén el ID del usuario logueado desde el LocalStorage
        const user = localStorage.getItem("user_id");
    
        if (user) {
          fetchContents(user);
        } else {
          console.log('Usuario no ha iniciado sesión');
        }
    
        // Temporizador para mostrar la alerta después de 5 segundos
        const timer = setTimeout(() => {
          if (contents.length === 0) {
            setShowNoContentAlert(true);
          }
        }, 5000); // 5000 ms = 5 segundos
    
        return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
      }, [contents]);

    const fetchContents = async (user: string) => {
        try {
            const userContents = await getUserContents(user);
            setContents(userContents);
        } catch (error) {
            
            console.log('Error al obtener la lista');
        }
    };

/*     const handleDelete = async (contentId: string) => {
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
    }; */

    return (
        <div>
      {showNoContentAlert && contents.length === 0 && (
        <div className="alert alert-warning mt-3 mb-4 mx-5" role="alert">
          ¡Hola! 👋 Parece que aún no has creado ningún contenido. ¿Por qué no empiezas a compartir tus conocimientos con el mundo? 🚀🌟
        </div>
            )}
            <div className="row">
                {contents.map((content) => (
                    <div key={content._id}>
                        <div className="card my-content-card my-content-card-50">
                            <div className="card-body">
                                <div className="content-header">
                                    <h5 className="card-title">{content.title}</h5>
                                    <div className="edit-delete-icons">
                                        <a href={`/editcontent`}><FaPencilAlt className="edit-icon" /></a>
                                        {/* <span onClick={() => handleDelete(content._id)}> */}<FaTrashAlt className="edit-icon color" />{/* </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {contents.length === 2 && (
                <div className="alert alert-warning mt-3 mb-4 mx-5" role="alert"> Sigue creando contenido 🚀 <br />¡Estoy emocionad@ por ver lo que vendrá a continuación! 🚀🌟
                </div> 
            )}
        </div>
    );
};



export default MyContents;
