import React, { useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity, 
  Text,
  SafeAreaView,
} from 'react-native';
import Header from '../../../../components/Profile/Header';
import FormInput from '../../../../components/Profile/FormInput';
import ProfileButton from '../../../../components/Profile/ProfileButton';
import { router } from 'expo-router';

const AccountDetails = () => {
  const [formData, setFormData] = useState({
    name: 'Fulano de Tal',
    cpf: '000.000.000.00',
    email: 'You@mail.com',
    phone: 'You@mail.com',
  });

  const handleSave = () => {
    console.log('Save changes', formData);
  };

  const handleChangePassword = () => {
    console.log('Change password');
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
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />
        
        <FormInput
          label="CPF"
          value={formData.cpf}
          onChangeText={(text) => setFormData({ ...formData, cpf: text })}
        />

        <ProfileButton
          label="Trocar senha"
          icon="lock"
          onPress={() => handleChangePassword()}
        />

        <FormInput
          label="Email"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />

        <FormInput
          label="Telefone"
          value={formData.phone}
          onChangeText={(text) => setFormData({ ...formData, phone: text })}
        />

        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Salvar modificações</Text>
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

