import CONFIG from "../config";

export const apiFetch = ({ path, method, body }) => {
  return fetch(CONFIG.API_URL + path, {
    path,
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: body ? JSON.stringify(body) : undefined
  });
};