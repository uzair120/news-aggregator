import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines",
  params: {
    language: "en",
    apiKey: process.env.REACT_APP_NEWS_API_KEY
  }
});

export default newsAPI;
