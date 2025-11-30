import { mockResponse } from "./apiClient";

/**
 * @typedef {Object} AuthPayload
 * @property {string} email
 * @property {string} name
 * @property {"client" | "admin" | "support"} role
 * @property {string} token
 */

export const authApi = {
  login: async ({ email, password }) => {
    const role = email.includes("admin")
      ? "admin"
      : email.includes("support")
        ? "support"
        : "client";

    const user = {
      email,
      name: email.split("@")[0] || "Guest",
      role,
      token: "mock-token-" + Date.now(),
    };

    return mockResponse(user);
  },
  register: async (payload) => {
    return mockResponse({ success: true, ...payload, id: Date.now().toString() });
  },
  forgotPassword: async (email) => {
    return mockResponse({ success: true, email });
  },
};
