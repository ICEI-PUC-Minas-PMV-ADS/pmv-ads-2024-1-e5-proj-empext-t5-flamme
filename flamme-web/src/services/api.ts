import axios from "axios";

export const api = axios.create({
  baseURL: "https://db-flamme.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});
