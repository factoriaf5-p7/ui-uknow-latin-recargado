import axios from "axios"

//connection for all content
export const contentService = {login(content: {
    title: string;
    description: string;
    price: number;
    category: string;
    dificulty: number;
    content: string; }
    ){
    return axios.get('http://localhost:3000/api/v1/content', {
      params: content,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

//connection for search content
 

interface Content {
    _id: string;
    title: string;
}

export const searchContent = (query: string): Promise<Content[]> => {
    return axios.get(`http://localhost:3000/api/V1/content/search/content?query=${encodeURIComponent(query)}`)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error al realizar la búsqueda:', error);
            return [];
        });
};
 
export const buyContentUser = { buyContent(id: string, contentId: string) {
  return axios.post(
    `http://localhost:3000/api/v1/auth/buyContent/${id}/${contentId}`,
    { headers: { 'Content-Type': 'application/JSON' } }
  );
},
};