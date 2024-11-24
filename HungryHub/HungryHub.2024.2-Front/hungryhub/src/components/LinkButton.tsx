import React from "react";
import { ButtonProps, View, StyleSheet, Pressable, Text } from "react-native";

interface LinkButtonProps extends ButtonProps {
    loading?: boolean;
}

export default function LinkButton({ title, onPress }: LinkButtonProps) {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.buttonContainer}>
                <Text
                    style={{ color: "white" }}
                >
                    {title}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        margin: 10,
        backgroundColor: "#EB001B",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
    },
    buttonContainer: {
        borderRadius: 10,
    }
});