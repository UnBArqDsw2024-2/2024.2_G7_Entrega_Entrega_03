import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

interface InputProps extends TextInputProps{
}

export default function Input({ value, onChangeText, placeholder }: InputProps) {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={styles.textInput}
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "#161616",
        margin: 10,
        width: "80%",
        borderRadius: 10,
    }
});