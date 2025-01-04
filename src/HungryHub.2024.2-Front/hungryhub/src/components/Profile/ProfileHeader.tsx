import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

type ProfileHeaderProps = {
  name: string;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
        <View style={styles.icons}>
          <Icon
            name="shopping-cart"
            type="font-awesome"
            size={20}
            color="#000"
            containerStyle={styles.icon}
          />
          <Icon
            name="bell"
            type="font-awesome"
            size={20}
            color="#000"
          />
        </View>
      </View>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Icon
            name="user"
            type="font-awesome"
            size={40}
            color="#CCCCCC"
          />
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  profile: {
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default ProfileHeader;

