import axios from "axios";

const API_TIMEOUT = 5000;

const weatherAxios = axios.create({
  baseURL: "https://api.open-meteo.com",
  timeout: API_TIMEOUT,
});

const geoAxios = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com",
  timeout: API_TIMEOUT,
});

const newsAxios = axios.create({
  baseURL: "https://newsdata.io/api/1/latest",
  timeout: API_TIMEOUT,
});

export { weatherAxios, geoAxios, newsAxios };