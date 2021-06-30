import axios from "axios";

const Instance = axios.create({
  baseURL: "...", //The API (cloud function) url comes here
});

export default Instance;
