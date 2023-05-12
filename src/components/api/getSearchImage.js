const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34776135-c2da03be0c2ba8614e7d82d4c';
export const getSearchImage = (text,page) => {
  return fetch(
    `${BASE_URL}?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => response.json());
};
