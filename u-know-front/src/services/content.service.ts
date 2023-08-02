import axios from "axios";

export interface Content {
  _id: string;
  title: string;
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  dificulty: number;
  ratings: Array<number>;
  comments: Array<Comment>;
  content: string;
}

export interface Comment {
  title: string;
  comment: string;
  username: string;
  _id: string;
}

//connection for all content

export const contentService = {
  getCourses: async (): Promise<Course[]> => {
    try {
      const response = await axios.get<Course[]>(
        "http://localhost:3000/api/v1/content/search/content",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      // Aquí puedes manejar los errores de la petición si es necesario
      console.error("Error fetching courses:", error);
      throw error;
    }
  },
};

//connection for search content

export const searchContent = (query: string): Promise<Content[]> => {
  return axios
    .get(
      `http://localhost:3000/api/V1/content/search/content?query=${encodeURIComponent(
        query
      )}`
    )
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error al realizar la búsqueda:", error);
      return [];
    });
};

export const buyContentUser = {
  buyContent(id: string, contentId: string) {
    return axios.post(
      `http://localhost:3000/api/v1/auth/buyContent/${id}/${contentId}`,
      { headers: { "Content-Type": "application/JSON" } }
    );
  },
};

//connection for get all create content
export const getUserContents = async (user: string): Promise<Content[]> => {
  try {
    const response = await axios.get<Content[]>(
      `http://localhost:3000/api/v1/content/user/${user}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // si hay exito, aquí se retorna la data de la respuesta
  } catch (error) {
    console.error("Error fetching user contents:", error);
    throw error;
  }
};

//connection for get all purchased content
export async function getBoughtContent(user: string) {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/content/${user}/boughtContent`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching bought content.");
  }
}
