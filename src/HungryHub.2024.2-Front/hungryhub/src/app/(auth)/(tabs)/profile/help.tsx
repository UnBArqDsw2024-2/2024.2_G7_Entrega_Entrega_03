import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  SafeAreaView,
} from 'react-native';
import Header from '../../../../components/Profile/Header';
import ProfileButton from '../../../../components/Profile/ProfileButton';

const Help = () => {
  const handleNavigation = (route: string) => {
    console.log(`Navigate to ${route}`);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Header 
        title="Ajuda" 
        onBack={() => console.log('Navigate back')} 
      />
      <ScrollView style={styles.container}>
        <ProfileButton
          label="Destaques"
          icon="star"
          onPress={() => handleNavigation('highlights')}
        />
        
        <ProfileButton
          label="Sobre o HungryHub"
          icon="info-circle"
          onPress={() => handleNavigation('about')}
        />

        <ProfileButton
          label="Como Iniciar"
          icon="play-circle"
          onPress={() => handleNavigation('getting-started')}
        />

        <ProfileButton
          label="Perguntas Frequentes"
          icon="question-circle"
          onPress={() => handleNavigation('faq')}
        />

        <ProfileButton
          label="Saiba como funciona"
          icon="info-circle"
          onPress={() => handleNavigation('how-it-works')}
        />

        <ProfileButton
          label="Como cadastrar seu negócio"
          icon="briefcase"
          onPress={() => handleNavigation('business-registration')}
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

export default Help;

