import { create } from "zustand";

interface DashboardState {
  totalUsers: number;
  totalProducts: number;
  totalCategories: number;
  fetchDashboardStats: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  totalUsers: 0,
  totalProducts: 0,
  totalCategories: 0,

  fetchDashboardStats: async () => {
    try {
      const [usersRes, productsRes, categoriesRes] = await Promise.all([
        fetch("https://dummyjson.com/users"),
        fetch("https://dummyjson.com/products"),
        fetch("https://dummyjson.com/products/categories"),
      ]);

      const usersData = await usersRes.json();
      const productsData = await productsRes.json();
      const categoriesData = await categoriesRes.json();

      set({
        totalUsers: usersData.total,
        totalProducts: productsData.total,
        totalCategories: categoriesData.length,
      });
    } catch (error) {
      console.error("Failed to fetch dashboard stats", error);
    }
  },
}));
