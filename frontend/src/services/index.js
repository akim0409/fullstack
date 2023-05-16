// TODO:
// const BASE_URL = 'http://localhost:3001';
const BASE_URL = 'http://api.autumn-kim-barkr-app.com';

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