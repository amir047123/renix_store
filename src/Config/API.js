import axios from "axios";

export default axios.create({
  baseURL: "http://63.250.41.158:5000/api/v1",
});

export const server_url = `http://63.250.41.158:5000/api/v1`;
