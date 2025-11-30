import { mockResponse } from "./apiClient";
import { clients } from "../data/mockData";

/**
 * @typedef {Object} ClientProfile
 * @property {string} id
 * @property {string} name
 * @property {string} phone
 * @property {string} email
 * @property {{label: string, location: string, notes?: string}[]} addresses
 */

export const clientsApi = {
  getClients: async () => mockResponse(clients),
  getClientById: async (id) => mockResponse(clients.find((c) => c.id === id) || null),
  updateClient: async (id, payload) => {
    return mockResponse({ ...payload, id, updatedAt: new Date().toISOString() });
  },
};
