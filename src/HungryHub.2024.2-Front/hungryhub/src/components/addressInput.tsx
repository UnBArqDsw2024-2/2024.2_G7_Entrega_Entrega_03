import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

interface AddressProps extends TextInputProps{
}

export default function AddressInput({ value, onChangeText, placeholder }: AddressProps) {
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
        width: "60%",
        borderRadius: 5,
        textAlign : "center"
    }
});