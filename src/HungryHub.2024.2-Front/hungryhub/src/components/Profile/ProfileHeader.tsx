import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type ProfileHeaderProps = {
  name: string;
  avatarUrl: string;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, avatarUrl }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: avatarUrl,
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', 
  },
});

export default ProfileHeader;
