import Cookies from 'js-cookie';
export const BASE_URL = import.meta.env.VITE_API_URL;
export const AUTH_HEADER = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${Cookies.get('token')}` || '',
};
