import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getNews = () => API.get("/news");
export const getEvents = () => API.get("/events");