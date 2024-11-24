import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import LinkButton from "../../components/LinkButton";
import { logoutUser } from "../../api/services/user.service";
import { router } from "expo-router";

export default function Home() {
    const { user } = useLocalSearchParams();

    const logout = async () => {
      await logoutUser();
      router.push({
        pathname: "../(public)/login",
      });
    };

    console.log(user);

    return (
      <View>
        <Text>
          {user}
        </Text>
        <LinkButton title="Logout" onPress={logout} />
      </View>
    );
}
