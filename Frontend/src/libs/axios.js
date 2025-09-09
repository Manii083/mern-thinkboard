import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5002/api"
    : "/api/notes"; // <-- update for production

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
