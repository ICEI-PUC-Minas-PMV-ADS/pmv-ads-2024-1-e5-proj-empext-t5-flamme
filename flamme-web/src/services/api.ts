import axios from "axios";

export const api = axios.create({
  baseURL: "http://ec2-54-235-53-150.compute-1.amazonaws.com:5432/",
  headers: {
    "Content-Type": "application/json",
  },
});
