import Axios, { AxiosError, AxiosInstance } from "axios";

const http: AxiosInstance = Axios.create({
  // baseURL: env.API_BASE_URL, in a real application we would initiate the base url here
});

http.interceptors.response.use(undefined, (err) => {
  const expectedError: AxiosError =
    err.response && err.response.status >= 400 && err.response.status < 500;
  if (expectedError) {
    console.error("SOMETHING UNEXPECTED HAPPENED");
  }
  return Promise.reject(err);
});

export default http;
