import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API_BASE_URL;

export const request = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'pt',
  },
});
