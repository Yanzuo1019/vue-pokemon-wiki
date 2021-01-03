import axios from "axios";

const service = axios.create({
  baseURL:
    "https://mockapi.eolinker.com/EfDv9WXd02d5fd4a5347d82d8a3486ad0643dff0226afe5",
  timeout: 5000
});

export default service;
