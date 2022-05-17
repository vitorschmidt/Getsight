//Libs imports
import axios from "axios";

const Api = axios.create({
  baseURL: "https://json-capstone.herokuapp.com/",
});

const ApiNoticias = axios.create({
  baseURL:
    "https://newsdata.io/api/",
});

export { Api, ApiNoticias };
