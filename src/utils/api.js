import axios from "axios";

const instance = axios.create({
  baseURL: "https://domanhthuong-intern-assignment-server.onrender.com/api/v1",
});

export default instance;
