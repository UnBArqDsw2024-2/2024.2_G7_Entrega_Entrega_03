import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import ProfileButton from '../../components/Profile/ProfileButton';
import ProfileHeader from '../../components/Profile/ProfileHeader';

const Profile = () => {
  const handleNavigation = (route: string) => {
    console.log(`Navigate to ${route}`);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        <ProfileHeader name="Fulano de Tal" />
        
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
          icon="cog"
          onPress={() => handleNavigation('configuracoes')}
        />
        <ProfileButton
          label="Ajuda"
          icon="question-circle"
          onPress={() => handleNavigation('ajuda')}
        />
        <ProfileButton
          label="Sair da conta"
          icon="sign-out"
          onPress={() => console.log('Logout')}
          isLogout
        />
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
    padding: 20,
  },
});

export default Profile;

