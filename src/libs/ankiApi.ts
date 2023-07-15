import Cookies from 'js-cookie';
type AnkiAPIConfig = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  headers?: any;
  endpoint: string;
};

export const ankiAPI = async (config: AnkiAPIConfig) => {
  console.log(import.meta.env.VITE_API_URL + config.endpoint);
  return await fetch('http://localhost:8080/api/auth/login', {
    method: config.method,
    body: JSON.stringify(config.body),
    headers: {
      'Content-Type': 'application/json',
      // ...config.headers,
      // Authorization: `Bearer ${Cookies.get('token')}` || '',
    },
  });
};
// http://localhost:8080/api/auth/login
// http://localhost:8080/api/auth/login
