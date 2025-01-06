import { User, UserBody, UserLogin } from '../../interfaces/user.interface';
import { apiClient, publicApiClient } from '../apiClient';
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface CreateUserResponse {
    cpf: string;
    email: string;
    first_name: string;
    id: number;
    phone: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
}

export interface LoginResponse {
    access: string;
    refresh: string;
    user: User;
}

export const userService = {
    createUser: async (userData: UserBody): Promise<CreateUserResponse> => {
        try {
            const response = await publicApiClient.post<CreateUserResponse>("clientes/", userData);
            return response.data;
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            throw error;
        }
    },
    loginUser: async (credentials: UserLogin): Promise<LoginResponse> => {
        try {
            const response = await publicApiClient.post<LoginResponse>("token/", credentials);

            const { access, refresh, user } = response.data;

            AsyncStorage.setItem('access', access);
            AsyncStorage.setItem('refresh', refresh);
            AsyncStorage.setItem('user', JSON.stringify(user));

            return response.data;

        } catch (error) {
            console.error("Erro ao logar usuário:", error);
            throw error;
        }
    },
    logoutUser: async (): Promise<void> => {
        try {
            await AsyncStorage.removeItem("access");
            await AsyncStorage.removeItem("refresh");
            await AsyncStorage.removeItem("user");
        } catch (error) {
            console.error("Erro ao deslogar usuário:", error);
            throw error;
        }
    }
}
