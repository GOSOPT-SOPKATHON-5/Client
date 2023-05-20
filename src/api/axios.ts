import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
    'user-id': 2,
  },
});

export default client;
