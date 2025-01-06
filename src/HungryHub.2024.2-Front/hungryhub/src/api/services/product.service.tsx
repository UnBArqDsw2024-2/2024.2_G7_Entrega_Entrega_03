import { Product, ProductBody } from "../../interfaces/product.interface";
import { apiClient } from "../apiClient";

export interface ProductResponse {
    id: number;
    name: string;
    description: string;
    price: number;
    // rating: number;
    // image: string;
    // sales: number;
}

// TODO: Implementar rotas de favoritos
// TODO: Implementar campos de rating, imagem e vendas
// TODO: Implementar rotas para recomendações, promoções e pedidos frequentes

export const productService = {
    createProduct: async (productData: ProductBody): Promise<ProductResponse> => {
        try {
            const response = await apiClient.post<any>("produtos/", productData);
            return response.data;
        } catch (error) {
            console.error("Erro ao criar produto:", error);
            throw error;
        }
    },
    updateProduct: async (productId: number, productData: ProductBody): Promise<ProductResponse> => {
        try {
            const response = await apiClient.put<any>(`produtos/${productId}/`, productData);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            throw error;
        }
    },
    deleteProduct: async (productId: number): Promise<void> => {
        try {
            await apiClient.delete(`produtos/${productId}/`);
        } catch (error) {
            console.error("Erro ao deletar produto:", error);
            throw error;
        }
    },
    getProducts: async (): Promise<Product[]> => {
        try {
            const response = await apiClient.get<any>("produtos/");
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            throw error;
        }
    },
    getProductById: async (productId: string): Promise<Product> => {
        try {
            const response = await apiClient.get<any>(`produtos/${productId}/`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
            throw error;
        }
    }
};