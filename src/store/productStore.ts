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

  page: number;
  limit: number;
  category: string | null;
  searchQuery: string;

  fetchProducts: () => Promise<void>;
  setPage: (page: number) => void;
  searchProducts: (query: string) => Promise<void>;
  filterByCategory: (category: string) => Promise<void>;
  fetchProductById: (id: string) => Promise<void>;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  total: 0,
  loading: false,
  selectedProduct: null,

  page: 1,
  limit: 10,
  category: null,
  searchQuery: "",


  fetchProducts: async () => {
    const { page, limit, category, searchQuery } = get();
    const skip = (page - 1) * limit;

    set({ loading: true });

    let data;

    if (searchQuery) {
      data = await searchProducts(searchQuery);
    } else if (category) {
      data = await getProductsByCategory(category);
    } else {
      data = await getProducts(limit, skip);
    }

    set({
      products: data.products,
      total: data.total,
      loading: false,
    });
  },


  setPage: (page) => {
    set({ page });
  },


  searchProducts: async (query) => {
    set({
      loading: true,
      page: 1,
      category: null,
      searchQuery: query,
    });

    const data = await searchProducts(query);

    set({
      products: data.products,
      total: data.total,
      loading: false,
    });
  },


  filterByCategory: async (category) => {
    set({
      loading: true,
      page: 1,
      category,
      searchQuery: "",
    });

    const data = await getProductsByCategory(category);

    set({
      products: data.products,
      total: data.total,
      loading: false,
    });
  },


  fetchProductById: async (id) => {
    set({ loading: true });

    const data = await getProductById(id);

    set({
      selectedProduct: data,
      loading: false,
    });
  },
}));
