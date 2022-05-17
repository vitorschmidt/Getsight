import axios from "axios";

const Api = axios.create({
  baseURL: "https://json-capstone.herokuapp.com/",
});

const ApiNoticias = axios.create({
  baseURL:
    "https://newsdata.io/api/1/news?apikey=pub_744605865aea08263cc7397e48279f8766ca&q=Brasil&country=br&language=pt&category=politics ",
});

export { Api, ApiNoticias };
