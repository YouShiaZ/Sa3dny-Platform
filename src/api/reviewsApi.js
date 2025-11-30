import { mockResponse } from "./apiClient";
import { reviews } from "../data/mockData";

/**
 * @typedef {Object} Review
 * @property {string} id
 * @property {string} client
 * @property {string} service
 * @property {number} rating
 * @property {string} comment
 * @property {"positive"|"neutral"|"negative"} sentiment
 */

export const reviewsApi = {
  getReviews: async () => mockResponse(reviews),
  createReview: async (payload) => mockResponse({ ...payload, id: `rev-${Date.now()}` }),
};
