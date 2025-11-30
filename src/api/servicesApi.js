import { mockResponse } from "./apiClient";
import { serviceCategories, services } from "../data/mockData";

/**
 * @typedef {Object} ServiceCategory
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} icon
 */

/**
 * @typedef {Object} Service
 * @property {string} id
 * @property {string} name
 * @property {string} categoryId
 * @property {number} price
 * @property {string} duration
 * @property {number} rating
 * @property {number} reviewsCount
 * @property {string[]} highlights
 */

export const servicesApi = {
  getCategories: async () => mockResponse(serviceCategories),
  getServices: async () => mockResponse(services),
  getServiceById: async (id) => {
    const service = services.find((svc) => svc.id === id);
    return mockResponse(service || null);
  },
};
