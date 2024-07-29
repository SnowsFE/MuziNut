// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8080/users/authenticate",
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem(
//       "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MjA2ODQ1MjR9._dXPmLdEcmS8YRdtQGFMHMxeARXQcjhN-stFS9kz5RT8CY7Tm9ANzJnnYg_hWDYcMg3IyUCgMzqoqmTrzXDOYA"
//     );
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
