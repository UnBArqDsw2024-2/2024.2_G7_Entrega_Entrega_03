import { UserBody } from '../../interfaces/user.interface';
import apiClient from '../apiClient';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createUser = async (userData: UserBody) => {
  try {
    const response = await apiClient.post("usuarios/", userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

export const loginUser = async (credentials: UserBody) => {
  try{
    const response = await apiClient.post("token/", credentials);

    const {access, refresh, user_id} = response.data;

    AsyncStorage.setItem('access', access);

    AsyncStorage.setItem('refresh', refresh);

    return response.data;
    
  } catch (error) {
    console.error("Erro ao logar usuário:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem("access");
    await AsyncStorage.removeItem("refresh");
  } catch (error) {
    console.error("Erro ao deslogar usuário:", error);
    throw error;
  }
};

export const getUserDetails = async () => {
  try {
    const response = await apiClient.get("user/details/");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do usuário:", error);
    throw error;
  }
}