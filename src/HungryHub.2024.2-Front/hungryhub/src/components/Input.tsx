import React from "react";
import { TextInput, TextInputProps, StyleSheet, View, Text } from "react-native";

interface InputProps extends TextInputProps {
}

export default function Input({ secureTextEntry, value, onChangeText, placeholder }: InputProps) {
    return (
        <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={styles.textInput}
            placeholderTextColor={"#161616"}
        />
    );
}

const styles = StyleSheet.create({
    labelText: {
        color: "#161616",
        fontSize: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#161616",
        padding: 10,
        borderRadius: 10,
    }
});