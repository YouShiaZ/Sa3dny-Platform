import { mockResponse } from "./apiClient";
import { workers } from "../data/mockData";

/**
 * @typedef {Object} Worker
 * @property {string} id
 * @property {string} name
 * @property {string} phone
 * @property {string} area
 * @property {string[]} services
 * @property {"Bronze"|"Silver"|"Gold"} level
 * @property {number} rating
 * @property {number} totalEarned
 */

export const workersApi = {
  getWorkers: async () => mockResponse(workers),
  getWorkerById: async (id) => mockResponse(workers.find((w) => w.id === id) || null),
  createWorker: async (payload) => mockResponse({ ...payload, id: `worker-${Date.now()}` }),
  updateWorker: async (id, payload) => mockResponse({ ...payload, id }),
};
