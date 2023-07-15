import axios from 'axios';
import Cookies from 'js-cookie';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Cookies.get('token')}`,
  },
  // withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

// export const setAuthToken = (token: string) => {
//   api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

// export const removeAuthToken = () => {
//   delete api.defaults.headers.common['Authorization'];
// };
