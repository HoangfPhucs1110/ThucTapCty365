import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios Error:", error.message);
    return Promise.reject(error);
  }
);

export default axiosClient;
