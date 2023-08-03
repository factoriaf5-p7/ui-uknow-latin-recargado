import axios, { AxiosError } from "axios";

export interface ContentData {
  title: string;
  description: string;
  price: number;
  category: string;
  dificulty: number;
  content: string;
}

export const CreateContent = async (
  user: string | null,
  contentData: ContentData
) => {
  const url = `http://localhost:3000/api/v1/content/${user}`;
  try {
    const response = await axios.post(url, contentData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error("Error al crear el contenido: " + error.message);
    } else {
      throw new Error("Error desconocido al crear el contenido.");
    }
  }
};

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError === true;
}
