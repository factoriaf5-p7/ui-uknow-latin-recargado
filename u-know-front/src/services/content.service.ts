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