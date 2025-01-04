import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

type ProfileButtonProps = {
  label: string;
  icon: string;
  onPress: () => void;
  isLogout?: boolean;
};

const ProfileButton: React.FC<ProfileButtonProps> = ({
  label,
  icon,
  onPress,
  isLogout = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, isLogout && styles.logoutButton]}
      onPress={onPress}
    >
      <View style={styles.iconWrapper}>
        <Icon name={icon} type="font-awesome" size={18} color={isLogout ? '#FF0000' : '#000'} />
      </View>
      <Text style={[styles.label, isLogout && styles.logoutLabel]}>{label}</Text>
      <Icon name="chevron-right" type="font-awesome" size={15} color={isLogout ? '#FF0000' : '#000'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // Fundo cinza claro
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  iconWrapper: {
    marginRight: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  logoutButton: {
    backgroundColor: '#F8D7DA', 
  },
  logoutLabel: {
    color: '#FF0000', 
  },
});

export default ProfileButton;
