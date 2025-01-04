'use client';

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import ProfileButton from '../../components/Profile/ProfileButton';

const Profile = () => {
  const handleNavigation = (route: string) => {
    console.log(`Navigate to ${route}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileHeader
        name="Fulano de Tal"
        avatarUrl="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      />
      <ProfileButton
        label="Dados da conta"
        icon="user"
        onPress={() => handleNavigation('dados-da-conta')}
      />
      <ProfileButton
        label="Endereços"
        icon="map-marker"
        onPress={() => handleNavigation('enderecos')}
      />
      <ProfileButton
        label="Pagamento"
        icon="credit-card"
        onPress={() => handleNavigation('pagamento')}
      />
      <ProfileButton
        label="Configurações"
        icon="cogs"
        onPress={() => handleNavigation('configuracoes')}
      />
      <ProfileButton
        label="Ajuda"
        icon="info-circle"
        onPress={() => handleNavigation('ajuda')}
      />
      <ProfileButton
        label="Sair da conta"
        icon="sign-out"
        onPress={() => console.log('Logout')}
        isLogout
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
});

export default Profile;
