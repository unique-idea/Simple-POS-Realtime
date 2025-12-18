import axios from "axios";

const API_DEV = "https://localhost:7247";
const URL = import.meta.env.VITE_API_BASE_URL;

export const getProducts = async () => {
  const res = await axios.get(`${URL}/products`);
  return res.data;
};

export const createOrder = async (order) => {
  const res = await axios.post(`${URL}/orders`, order);
  return res.data;
};

export const getOrders = async () => {
  const res = await axios.get(`${URL}/orders`);
  return res.data;
};
