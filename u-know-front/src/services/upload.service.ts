
import axios, { AxiosError } from 'axios';

export interface ContentData {
    title: string;
    description: string;
    price: number;
    category: string;
    difficulty: number;
    content: string;
}

export const CreateContent = async (userId: string, contentData: ContentData) => {
    const url = `http://localhost:3000/api/v1/content/${userId}`;
    try {
        const response = await axios.post(url, contentData);
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            throw new Error('Error al crear el contenido: ' + error.message);
        } else {
            throw new Error('Error desconocido al crear el contenido.');
        }
    }
};

function isAxiosError(error: unknown): error is AxiosError {
    return (error as AxiosError).isAxiosError === true;
}
