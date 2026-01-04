import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (credentials: {
  username: string;
  password: string;
}) => {
  const res = await api.post("/auth/login", credentials);
  return res.data;
};

// USERS
export const getUsers = async (limit: number, skip: number) => {
  const res = await api.get(`/users?limit=${limit}&skip=${skip}`);
  return res.data;
};

export const searchUsers = async (query: string) => {
  const res = await api.get(`/users/search?q=${query}`);
  return res.data;
};

export const getUserById = async (id: string) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

// PRODUCTS
export const getProducts = async (limit: number, skip: number) => {
  const res = await api.get(`/products?limit=${limit}&skip=${skip}`);
  return res.data;
};

export const searchProducts = async (query: string) => {
  const res = await api.get(`/products/search?q=${query}`);
  return res.data;
};

export const getProductsByCategory = async (category: string) => {
  const res = await api.get(`/products/category/${category}`);
  return res.data;
};

export const getProductById = async (id: string) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

