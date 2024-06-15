import axios from "axios";
import Cookies from "js-cookie";

const fetcher = () => {
  const token = Cookies.get("token");
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return instance;
};

export default fetcher();
