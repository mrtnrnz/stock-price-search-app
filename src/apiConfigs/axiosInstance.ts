import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://finnhub.io/api/v1",
});

export default axiosInstance;
