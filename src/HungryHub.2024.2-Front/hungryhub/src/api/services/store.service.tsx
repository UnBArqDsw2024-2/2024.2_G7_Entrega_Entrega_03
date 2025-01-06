import { apiClient } from "../apiClient";

export const storeService = {
  getStore: async (id: string) => {
    try {
      const response = await apiClient.get(`lojas/${id}/`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar loja:", error);
      throw error;
    }
  },
  getStores: async () => {
    try {
      const response = await apiClient.get("lojas/");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar lojas:", error);
      throw error;
    }
  },
}; 