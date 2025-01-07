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
      <View style={styles.content}>
        <View style={styles.iconWrapper}>
          <Icon 
            name={icon} 
            type="font-awesome" 
            size={20} 
            color={isLogout ? '#FF0000' : '#000'} 
          />
        </View>
        <Text style={[styles.label, isLogout && styles.logoutLabel]}>{label}</Text>
      </View>
      {!isLogout && (
        <Icon 
          name="chevron-right" 
          type="font-awesome" 
          size={20} 
          color="#666666" 
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D4D4D4',
    padding: 20,
    borderRadius: 20,
    marginBottom: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: 12,
    width: 20,
  },
  label: {
    fontSize: 20,
    color: '#000',
  },
  logoutButton: {
    backgroundColor: 'transparent',
    paddingLeft: 4,
    paddingRight: 4,
  },
  logoutLabel: {
    color: '#FF0000',
  },
});

export default ProfileButton;