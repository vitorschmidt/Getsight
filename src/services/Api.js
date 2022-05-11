import axios from "axios";

const Api = axios.create({
  baseURL: "https://json-capstone.herokuapp.com/",
});

export default Api;
