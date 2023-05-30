import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
const key = '35997534-743ef0023491800c2d14ecb92';
export const getImages = (query, page) => {
  return axios.get(`${baseURL}?key=${key}&q=${query}&per_page=12&page=${page}`);
};
