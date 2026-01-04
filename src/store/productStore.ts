import { create } from "zustand";
import {
  getProducts,
  searchProducts,
  getProductsByCategory,
  getProductById,
} from "@/services/api";

interface ProductState {
  products: any[];
  total: number;
  loading: boolean;
  selectedProduct: any | null;

  fetchProducts: (limit: number, skip: number) => Promise<void>;
  searchProducts: (query: string) => Promise<void>;
  filterByCategory: (category: string) => Promise<void>;
  fetchProductById: (id: string) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  total: 0,
  loading: false,
  selectedProduct: null,

  fetchProducts: async (limit, skip) => {
    set({ loading: true });
    const data = await getProducts(limit, skip);
    set({ products: data.products, total: data.total, loading: false });
  },

  searchProducts: async (query) => {
    set({ loading: true });
    const data = await searchProducts(query);
    set({ products: data.products, total: data.total, loading: false });
  },

  filterByCategory: async (category) => {
    set({ loading: true });
    const data = await getProductsByCategory(category);
    set({ products: data.products, total: data.total, loading: false });
  },

  fetchProductById: async (id) => {
    set({ loading: true });
    const data = await getProductById(id);
    set({ selectedProduct: data, loading: false });
  },
}));
