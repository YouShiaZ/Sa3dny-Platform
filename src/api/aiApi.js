import { mockResponse } from "./apiClient";
import { aiInsights } from "../data/mockData";

/**
 * @typedef {Object} AiMatchingSuggestion
 * @property {string} orderId
 * @property {string} suggestedWorker
 * @property {number} confidence
 * @property {string} reason
 */

/**
 * @typedef {Object} SentimentSummary
 * @property {number} positive
 * @property {number} neutral
 * @property {number} negative
 */

export const aiApi = {
  getSuggestions: async () => mockResponse(aiInsights.suggestions),
  getSentimentSummary: async () => mockResponse(aiInsights.sentiment),
};
