import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Home() {
    const { user } = useLocalSearchParams();

    console.log(user);

    return (
        <View>
            <Text>
                {user}
            </Text>
        </View>
    );
}
