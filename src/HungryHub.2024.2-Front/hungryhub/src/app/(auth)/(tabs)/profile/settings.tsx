import React from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Header from '../../../../components/Profile/Header';
import ProfileButton from '../../../../components/Profile/ProfileButton';
import { router } from 'expo-router';

const Settings = () => {
  const handleNavigation = (route: string) => {
    console.log(`Navigate to ${route}`);
    router.push(`/(auth)/(tabs)/profile/${route}`);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Header
        title="Configurações"
        onBack={() => router.back()}
      />
      <ScrollView style={styles.container}>
        <ProfileButton
          label="Notificações"
          icon="bell"
          onPress={() => handleNavigation('notifications')}
        />

        <ProfileButton
          label="Tema"
          icon="sun-o"
          onPress={() => handleNavigation('theme')}
        />

        <ProfileButton
          label="Histórico"
          icon="history"
          onPress={() => handleNavigation('history')}
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
    padding: 24,
  },
});

export default Settings;

