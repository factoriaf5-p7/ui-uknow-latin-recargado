import axios, { AxiosError } from 'axios';

export const updateContent = async (userId: string, _contentId: string, contentData: unknown) => {
    const url = `http://localhost:3000/api/v1/content/${userId}`;
    try {
        const response = await axios.patch(url, contentData);
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            throw new Error('Error al actualizar el contenido: ' + error.message);
        } else {
            throw new Error('Error desconocido al actualizar el contenido.');
        }
    }
};

function isAxiosError(error: unknown): error is AxiosError {
    return error.isAxiosError === true;
}
