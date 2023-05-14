// const BASE_URL = 'http://localhost:3001';
const BASE_URL = 'http://44.201.207.246';

export const apiFetch = ({ path, method, body }) => {
  return fetch(BASE_URL + path, {
    path,
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: body ? JSON.stringify(body) : undefined
  });
};