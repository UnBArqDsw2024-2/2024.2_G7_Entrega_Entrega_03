import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
import { userService } from "../../../api/services/user.service";
import LinkButton from "../../../components/LinkButton";

export default function Home() {
    const { user } = useLocalSearchParams();

    const logout = async () => {
      await userService.logoutUser();
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
