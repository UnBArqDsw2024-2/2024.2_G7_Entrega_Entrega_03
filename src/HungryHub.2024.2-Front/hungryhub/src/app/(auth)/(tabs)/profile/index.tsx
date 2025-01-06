import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import ProfileButton from '../../../../components/Profile/ProfileButton';
import ProfileHeader from '../../../../components/Profile/ProfileHeader';
import { router } from 'expo-router';
import { useAuth } from "../../../../context/AuthProvider";

const Profile = () => {
  const { user } = useAuth(); // Obtém o usuário do contexto
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simula carregamento, mas os dados já estão no contexto
    if (user) {
      setLoading(false);
    }
  }, [user]);

  const handleNavigation = (route: string) => {
    router.push({
      pathname: `/(auth)/(tabs)/profile${route}`,
    });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        <ProfileHeader
          name={user?.first_name || "Usuário Desconhecido"}
          avatarUrl={"https://via.placeholder.com/150"}
        />
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
