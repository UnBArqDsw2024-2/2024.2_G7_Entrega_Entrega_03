import { UserBody, UserLogin } from '../../interfaces/user.interface';
import { apiClient, publicApiClient } from '../apiClient';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userService = {
  createUser: async (userData: UserBody) => {
    try {
      const response = await publicApiClient.post("clientes/", userData);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      throw error;
    }
  },
  loginUser: async (credentials: UserLogin) => {
    try{
      const response = await publicApiClient.post("token/", credentials);
  
      const {access, refresh, user_id} = response.data;
  
      AsyncStorage.setItem('access', access);
      AsyncStorage.setItem('refresh', refresh);
      AsyncStorage.setItem('user', user_id);
  
      return response.data;
      
    } catch (error) {
      console.error("Erro ao logar usuário:", error);
      throw error;
    }
  },
  logoutUser: async () => {
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
