import axios from "axios";

const weatherAxios = axios.create({
  baseURL: "https://api.open-meteo.com",
  timeout: 5000,
});

const geoAxios = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com",
  timeout: 5000,
});

export { weatherAxios, geoAxios };
