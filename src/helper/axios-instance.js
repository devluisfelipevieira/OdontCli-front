import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASEURL;

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
