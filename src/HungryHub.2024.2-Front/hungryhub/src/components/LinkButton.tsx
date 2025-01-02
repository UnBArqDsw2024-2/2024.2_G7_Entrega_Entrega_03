import React from "react";
import { ButtonProps, View, StyleSheet, Pressable, Text } from "react-native";

interface LinkButtonProps extends ButtonProps {
    loading?: boolean;
}

export default function LinkButton({ title, onPress, disabled }: LinkButtonProps) {
    return (
        <Pressable
            disabled={disabled}
            style={[styles.container, disabled && styles.disabledContainer]}
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
        width: "100%",
        margin: 30,
        backgroundColor: "#EB001B",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
    },
    disabledContainer: {
        backgroundColor: "#B0B0B0",
    },
    buttonContainer: {
        borderRadius: 10,
    }
});