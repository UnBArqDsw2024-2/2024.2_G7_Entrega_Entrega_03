import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Alert,
  TextInput,
} from "react-native";
import Header from "../../../../components/Profile/Header";
import FormInput from "../../../../components/Profile/FormInput";
import ProfileButton from "../../../../components/Profile/ProfileButton";
import { useAuth } from "../../../../context/AuthProvider";
import { userService } from "../../../../api/services/user.service";
import { router } from 'expo-router';

const AccountDetails = () => {
  const { user } = useAuth(); // Obtém o usuário do contexto
  const [formData, setFormData] = useState({
    first_name: "",
    cpf: "",
    email: "",
    phone: "",
  });
  const [newPassword, setNewPassword] = useState(""); // Campo para nova senha
  const [loading, setLoading] = useState(false);

  // Sincroniza o formulário com os dados do contexto
  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name || "",
        cpf: user.cpf || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  // Salvar alterações
  const handleSave = async () => {
    try {
      setLoading(true);
      if (user) {
        const updatedFields = Object.entries(formData).reduce((acc, [key, value]) => {
          if (value !== (user as any)[key]) {
            acc[key] = value;
          }
          return acc;
        }, {} as Record<string, string>);

        if (Object.keys(updatedFields).length === 0) {
          Alert.alert("Nada a atualizar", "Nenhum dado foi alterado.");
          return;
        }

        const updatedUser = await userService.updateUserDetails(user.id, updatedFields);

        console.log("Usuário atualizado com sucesso:", updatedUser);
        Alert.alert("Sucesso", "Dados atualizados com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao salvar alterações:", error);
      Alert.alert("Erro", "Não foi possível salvar as alterações.");
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (!newPassword.trim()) {
      Alert.alert("Erro", "A senha não pode estar vazia.");
      return;
    }

    try {
      setLoading(true);
      if (user) {
        await userService.updateUserPassword(user.id, newPassword);
        Alert.alert("Sucesso", "Senha alterada com sucesso!");
        setNewPassword("");
      }
    } catch (error) {
      console.error("Erro ao alterar senha:", error);
      Alert.alert("Erro", "Não foi possível alterar a senha.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Header 
        title="Dados da conta" 
        onBack={() => router.back()} 
      />
      <ScrollView style={styles.container}>
        <FormInput
          label="Nome"
          value={formData.first_name}
          onChangeText={(text) => setFormData({ ...formData, first_name: text })}
        />

        <FormInput
          label="CPF"
          value={formData.cpf}
          onChangeText={(text) => setFormData({ ...formData, cpf: text })}
        />

        <FormInput
          label="Email"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
        <FormInput
          label="Nova Senha"
          placeholder="Digite a nova senha"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
        <ProfileButton
            label="Trocar senha"
            icon="lock"
            onPress={handleChangePassword}
        />

        <FormInput
          label="Telefone"
          value={formData.phone}
          onChangeText={(text) => setFormData({ ...formData, phone: text })}
        />

        <TouchableOpacity
          style={[styles.saveButton]}
          onPress={handleSave}
          disabled={loading}
        >
          <Text style={styles.saveButtonText}>
            {loading ? "Salvando..." : "Salvar modificações"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  passwordButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EEEEEE',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  passwordButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordButtonText: {
    marginLeft: 12,
    fontSize: 20,
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#FF0000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AccountDetails;

