import axios from "axios";

const weatherAxios = axios.create({
  baseURL: "https://api.openweathermap.org",
  timeout: 5000,
});

const foreCastAxios = axios.create({
  baseURL: "https://api.openweathermap.org",
  timeout: 5000,
});

export { weatherAxios, foreCastAxios };
