import axios from "axios";

export const api = axios.create({
  baseURL: "https://springboot-flamme.azurewebsites.net/",
  headers: {
    "Content-Type": "application/json",
  },
});
