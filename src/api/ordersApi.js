import { mockResponse } from "./apiClient";
import { orders, workers, services } from "../data/mockData";

/**
 * @typedef {Object} Order
 * @property {string} id
 * @property {string} clientName
 * @property {string} categoryId
 * @property {string} serviceId
 * @property {string} status
 * @property {string} date
 * @property {string} address
 * @property {number} total
 * @property {string} paymentMethod
 * @property {string} notes
 * @property {string | null} workerId
 * @property {{status: string, timestamp: string}[]} timeline
 */

export const ordersApi = {
  getOrders: async () => mockResponse(orders),
  getOrderById: async (id) => mockResponse(orders.find((order) => order.id === id) || null),
  getClientOrders: async (clientName) =>
    mockResponse(orders.filter((order) => order.clientName === clientName)),
  createOrder: async (payload) => {
    const newOrder = {
      id: `ORD-${Math.floor(Math.random() * 9000 + 1000)}`,
      status: "submitted",
      timeline: [{ status: "submitted", timestamp: new Date().toISOString() }],
      ...payload,
    };
    return mockResponse(newOrder);
  },
  updateStatus: async (id, status) => {
    const order = orders.find((o) => o.id === id);
    if (!order) return mockResponse(null);
    const timeline = [...order.timeline, { status, timestamp: new Date().toISOString() }];
    return mockResponse({ ...order, status, timeline });
  },
  assignWorker: async (id, workerId) => {
    const worker = workers.find((w) => w.id === workerId);
    const order = orders.find((o) => o.id === id);
    if (!order || !worker) return mockResponse(null);
    return mockResponse({
      ...order,
      workerId,
      status: "assigned",
      assignedWorker: worker,
    });
  },
  getServiceByOrder: async (orderId) => {
    const order = orders.find((o) => o.id === orderId);
    const service = services.find((svc) => svc.id === order?.serviceId);
    return mockResponse(service || null);
  },
};
