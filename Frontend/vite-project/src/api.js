import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-taupe-ten-61.vercel.app/api",
});

export const getNews = () => API.get("/news");
export const getEvents = () => API.get("/events");
