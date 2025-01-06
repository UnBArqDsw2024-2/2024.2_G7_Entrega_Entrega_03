import { AddressBody } from "../../interfaces/address.interface";
import { apiClient, publicApiClient } from '../apiClient';

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

export interface GetUserAddressesResponse {
    addresses: AddressBody[];
}

export const addressService = {
    createAddress: async (addressData: AddressBody): Promise<CreateAddressResponse> => {
        try {
            const response = await apiClient.post<CreateAddressResponse>("addresses/", addressData);
            return response.data;
        } catch (error) {
            console.error("Erro ao criar endereço:", error);
            throw error;
        }
    },

    updateAddress: async (addressData: AddressBody, addressId: number): Promise<UpdateAddressResponse> => {
        try {
            const response = await apiClient.put<UpdateAddressResponse>(`addresses/${addressId}/`, addressData);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar endereço:", error);
            throw error;
        }
    },

    deleteAddress: async (addressId: number): Promise<void> => {
        try {
            await apiClient.delete(`addresses/${addressId}/`);
        } catch (error) {
            console.error("Erro ao deletar endereço:", error);
            throw error;
        }
    },

    getUserAddresses: async (userId : String): Promise<GetUserAddressesResponse> => {
        try {
            const response = await apiClient.get(`address/?user=${userId}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar endereços do usuário:", error);
            throw error;
        }
    }
}