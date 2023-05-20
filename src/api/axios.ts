import axios from "axios";

const client = axios.create({
    baseURL: process.env.VITE_APP_BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': "*",
        'Content-type': 'application/json',
      },
})

export default client;