import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

type ProfileHeaderProps = {
  name: string;
  avatarUrl?: string;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, avatarUrl }) => {
  return (
    <View style={styles.container}>
    {avatarUrl ? (
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
    ) : (
      <View style={styles.avatarFallback}>
        <Icon name="user" type="font-awesome" size={40} color="#CCCCCC" />
      </View>
    )}
    <Text style={styles.name}>{name}</Text>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  avatarFallback: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});


export default ProfileHeader;