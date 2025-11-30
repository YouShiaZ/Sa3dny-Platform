import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.sa3dny.local",
});

/**
 * Simulate an HTTP response with a slight delay.
 * @template T
 * @param {T} data
 * @param {number} delay
 * @returns {Promise<{data: T}>}
 */
export const mockResponse = (data, delay = 400) =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ data }), delay);
  });
