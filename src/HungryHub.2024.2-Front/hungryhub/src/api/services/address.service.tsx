import { AddressInterface, AddressBody } from "../../interfaces/address.interface";
import { apiClient } from '../apiClient';

export interface CreateAddressResponse { 
    id: number;
    cep: string;
    rua: string;
    cidade: string;
    estado: string;
}

export interface UpdateAddressResponse {
    id: number;
    cep: string;
    rua: string;
    cidade: string;
    estado: string;
}

export const addressService = {
    createAddress: async (addressData: AddressBody): Promise<CreateAddressResponse> => {
        try {
            const response = await apiClient.post<CreateAddressResponse>("address/", addressData);
            return response.data;
        } catch (error) {
            console.error("Erro ao criar endereço:", error);
            throw error;
        }
    },

    updateAddress: async (addressData: AddressBody, id: number): Promise<UpdateAddressResponse> => {
        try {
            const response = await apiClient.put<UpdateAddressResponse>(`address/${id}/`, addressData);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar endereço:", error);
            throw error;
        }
    },

    deleteAddress: async (addressId: number): Promise<void> => {
        try {
            await apiClient.delete(`address/${addressId}/`);
        } catch (error) {
            console.error("Erro ao deletar endereço:", error);
            throw error;
        }
    },

    getUserAddresses: async (userId : String): Promise<AddressInterface[]> => {
        try {
            const response = await apiClient.get(`address/?user=${userId}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar endereços do usuário:", error);
            throw error;
        }
    }
}