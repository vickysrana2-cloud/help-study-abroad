import { create } from "zustand";
import { getUsers, searchUsers, getUserById } from "@/services/api";

interface UserState {
  users: any[];
  total: number;
  loading: boolean;
  selectedUser: any | null;

  fetchUsers: (limit: number, skip: number) => Promise<void>;
  searchUsers: (query: string) => Promise<void>;
  fetchUserById: (id: string) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  total: 0,
  loading: false,
  selectedUser: null,

  fetchUsers: async (limit, skip) => {
    set({ loading: true });
    const data = await getUsers(limit, skip);
    set({ users: data.users, total: data.total, loading: false });
  },

  searchUsers: async (query) => {
    set({ loading: true });
    const data = await searchUsers(query);
    set({ users: data.users, total: data.total, loading: false });
  },

  fetchUserById: async (id) => {
    set({ loading: true });
    const data = await getUserById(id);
    set({ selectedUser: data, loading: false });
  },
}));
