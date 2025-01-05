import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import ProfileButton from '../../../../components/Profile/ProfileButton';
import ProfileHeader from '../../../../components/Profile/ProfileHeader';
import { router } from 'expo-router';
import { userService } from '../../../../api/services/user.service';
import Toast from 'react-native-toast-message';

const Profile = () => {
  const handleNavigation = (route: string) => {
    console.log(`Navigate to ${route}`);
    router.push({
      pathname: `/(auth)/(tabs)/profile/${route}`,
    });
  };

  const logout = async () => {
    try {
      await userService.logoutUser();
      router.push({
        pathname: "/login",
      })        
    } catch (err) {
      console.error("Erro ao deslogar usuário:", err);
      Toast.show({
        type: 'error',
        text1: 'Erro ao deslogar',
        text2: 'Tente novamente',
      })
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        <ProfileHeader name="Fulano de Tal" />
        
        <ProfileButton
          label="Dados da conta"
          icon="user"
          onPress={() => handleNavigation('/profile_data')}
        />
        <ProfileButton
          label="Endereços"
          icon="map-marker"
          onPress={() => handleNavigation('/addresses')}
        />
        <ProfileButton
          label="Pagamento"
          icon="credit-card"
          onPress={() => handleNavigation('/payment')}
        />
        <ProfileButton
          label="Configurações"
          icon="cog"
          onPress={() => handleNavigation('/settings')}
        />
        <ProfileButton
          label="Ajuda"
          icon="question-circle"
          onPress={() => handleNavigation('/help')}
        />
        <ProfileButton
          label="Sair da conta"
          icon="sign-out"
          onPress={logout}
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

