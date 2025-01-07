import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

type NotificationToggleProps = {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

const NotificationToggle: React.FC<NotificationToggleProps> = ({
  label,
  value,
  onValueChange,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#D1D1D1', true: '#34C759' }}
        ios_backgroundColor="#D1D1D1"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D4D4D4',
    padding: 20,
    borderRadius: 12,
    marginBottom: 8,
  },
  label: {
    fontSize: 20,
    color: '#000',
    flex: 1,
  },
});

export default NotificationToggle;

