import React, { useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  SafeAreaView,
} from 'react-native';
import Header from '../../../../components/Profile/Header';
import NotificationToggle from '../../../../components/Profile/NotificationToggle';
import { router } from 'expo-router';

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    promotions: true,
    deliveryStatus: true,
    paymentConfirmation: true,
  });

  const handleToggle = (key: keyof typeof notifications) => (value: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Header 
        title="Notificações" 
        onBack={() => router.back()} 
      />
      <ScrollView style={styles.container}>
        <NotificationToggle
          label="Notificar Promoções"
          value={notifications.promotions}
          onValueChange={handleToggle('promotions')}
        />
        
        <NotificationToggle
          label="Status de Entrega"
          value={notifications.deliveryStatus}
          onValueChange={handleToggle('deliveryStatus')}
        />

        <NotificationToggle
          label="Confirmação de pagamento"
          value={notifications.paymentConfirmation}
          onValueChange={handleToggle('paymentConfirmation')}
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

export default Notifications;

