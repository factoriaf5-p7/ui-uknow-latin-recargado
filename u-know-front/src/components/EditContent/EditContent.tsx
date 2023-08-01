import { getUserContents, Content } from "../../services/content.service";   
import { useEffect, useState } from "react";

const EditContent = () => {
    const [contents, setContents] = useState<Content[]>([]); // para almacenar la lista de contenidos del usuario
    const fetchContents = async (userId: string) => {
        try {
            const userContents = await getUserContents(userId);
            setContents(userContents);
        } catch (error) {
            console.log('Error al obtener la lista');
        }
    };
    useEffect(() => { //llamo ala funcion para obtener la lista de contenidos del usuario
        const userId = 'userId'; 
        fetchContents(userId); //userId es el id del usuario logueado
    }, []);

    return (
        <div>
            <h1>Mis cursos</h1>
            <ul>
                {contents.map((content) => ( //recorro la lista de contenidos del usuario
                    <li key={content._id}>{content.title}</li> //muestro el titulo de cada contenido
                ))}
            </ul>
        </div>
    )
}

export default EditContent;