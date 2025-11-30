import { create } from "zustand";
import { authApi } from "../api/authApi";

const stored = localStorage.getItem("sa3dny-auth");
const parsed = stored ? JSON.parse(stored) : null;

export const useAuthStore = create((set) => ({
  user: parsed?.user || null,
  isAuthenticated: !!parsed?.user,
  loading: false,
  error: null,
  login: async (credentials) => {
    set({ loading: true, error: null });
    const response = await authApi.login(credentials);
    localStorage.setItem("sa3dny-auth", JSON.stringify({ user: response.data }));
    set({ user: response.data, isAuthenticated: true, loading: false });
    return response.data;
  },
  logout: () => {
    localStorage.removeItem("sa3dny-auth");
    set({ user: null, isAuthenticated: false });
  },
}));
