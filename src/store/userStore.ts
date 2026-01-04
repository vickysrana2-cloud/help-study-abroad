import { create } from "zustand";
import { getUsers, searchUsers, getUserById } from "@/services/api";

interface UserState {
  users: any[];
  total: number;
  loading: boolean;
  selectedUser: any | null;

  page: number;
  limit: number;

  fetchUsers: () => Promise<void>;
  setPage: (page: number) => void;
  searchUsers: (query: string) => Promise<void>;
  fetchUserById: (id: string) => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
  users: [],
  total: 0,
  loading: false,
  selectedUser: null,

  page: 1,
  limit: 10,

 
  fetchUsers: async () => {
    const { page, limit } = get();
    const skip = (page - 1) * limit;

    set({ loading: true });

    const data = await getUsers(limit, skip);

    set({
      users: data.users,
      total: data.total,
      loading: false,
    });
  },


  setPage: (page) => {
    set({ page });
  },


  searchUsers: async (query) => {
    set({ loading: true, page: 1 });

    const data = await searchUsers(query);

    set({
      users: data.users,
      total: data.total,
      loading: false,
    });
  },

 
  fetchUserById: async (id) => {
    set({ loading: true });

    const data = await getUserById(id);

    set({
      selectedUser: data,
      loading: false,
    });
  },
}));
