import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

// Interceptor xử lý response & error
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Lỗi Axios:", error.message);
    return Promise.reject(error);
  }
);

export default axiosClient;
