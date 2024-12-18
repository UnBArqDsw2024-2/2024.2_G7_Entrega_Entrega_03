import React from "react";
import { StyleSheet, View, Text } from "react-native";
import InputFactory, { InputFactoryProps } from "./InputFactory";

interface FormInputProps extends InputFactoryProps {
    label: string;
    error?: string;
}

export default function FormInput({ label, error, ...props }: FormInputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.labelText}>{label}</Text>
            <InputFactory {...props} />
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