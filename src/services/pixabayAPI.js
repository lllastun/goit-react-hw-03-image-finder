import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
const key = '35997534-743ef0023491800c2d14ecb92';
export const getImages = (query, page) => {
  // console.log(`${baseURL}?key=${key}&q=${query}&per_page=12&page=${page}`);
  return axios.get(`${baseURL}?key=${key}&q=${query}&per_page=12&page=${page}`);
};
//https://pixabay.com/api/?key=35997534-743ef0023491800c2d14ecb92&q=&per_page=12&page=1
//https://pixabay.com/api/?key=35997534-743ef0023491800c2d14ecb92&q=yellow+flowers&image_type=photo
