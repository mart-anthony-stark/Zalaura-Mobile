import axios from "axios";

export const makeRequest = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        'Content-Type': 'application/json',
      },
})