import axios from "axios";

const fetcher = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export default fetcher();
