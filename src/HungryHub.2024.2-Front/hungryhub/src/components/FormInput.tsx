import React from "react";
import { TextInput, TextInputProps, StyleSheet, View, Text } from "react-native";
import Input from "./Input";

interface InputProps extends TextInputProps {
    label: string;
    error?: string;
}

export default function FormInput({ label, secureTextEntry, value, onChangeText, placeholder, error }: InputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.labelText}>{label}</Text>
            <Input
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
            <Text style={styles.errorText}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 10,
    },
    labelText: {
        color: "#161616",
        fontSize: 16,
    },
    errorText: {
        color: "#EB001B",
    }
});