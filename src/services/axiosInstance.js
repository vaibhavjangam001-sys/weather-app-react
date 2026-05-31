import axios from "axios";

const weatherAxios = axios.create({
  baseURL: "https://api.open-meteo.com",
  timeout: 5000,
});

const geoAxios = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com",
  timeout: 5000,
});

const newsAxios = axios.create({
  baseURL: "https://newsdata.io/api/1/latest",
  timeout: 5000,
});

export { weatherAxios, geoAxios, newsAxios };
