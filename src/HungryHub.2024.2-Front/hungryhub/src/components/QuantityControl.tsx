import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

interface QuantityControlProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

export default function QuantityControl({ quantity, onIncrease, onDecrease }: QuantityControlProps) {
    return (
        <View style={styles.quantityContainer}>
            <Pressable onPress={onDecrease} style={styles.quantityButton}>
                <AntDesign name="minus" size={20} color="#161616" />
            </Pressable>
            <Text style={styles.quantityText}>{quantity}</Text>
            <Pressable onPress={onIncrease} style={styles.quantityButton}>
                <AntDesign name="plus" size={20} color="#161616" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    quantityButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
    },
    quantityText: {
        fontSize: 18,
        fontWeight: '500',
    },
});