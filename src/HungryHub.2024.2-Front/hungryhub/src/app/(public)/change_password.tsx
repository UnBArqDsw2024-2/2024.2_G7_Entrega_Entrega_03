import React, { useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity, 
  Text,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/Profile/Header';
import FormInput from '../../components/Profile/ChangePassword';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleSave = () => {
    console.log('Save password changes', formData);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Header 
        title="Trocar Senha" 
        onBack={() => console.log('Navigate back')} 
      />
      <ScrollView style={styles.container}>
        <FormInput
          label="Senha atual"
          value={formData.currentPassword}
          onChangeText={(text) => setFormData({ ...formData, currentPassword: text })}
          secureTextEntry
        />
        
        <FormInput
          label="Nova senha"
          value={formData.newPassword}
          onChangeText={(text) => setFormData({ ...formData, newPassword: text })}
          secureTextEntry
        />

        <FormInput
          label="Confirmar nova senha"
          value={formData.confirmPassword}
          onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
          secureTextEntry
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

export default ChangePassword;

