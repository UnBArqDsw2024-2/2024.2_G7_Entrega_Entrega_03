import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';
import { router } from "expo-router";

interface ProductHeaderProps {
    isFavorite: boolean;
    onToggleFavorite: () => void;
}

export default function ProductHeader({ isFavorite, onToggleFavorite }: ProductHeaderProps) {
    return (
        <View style={styles.header}>
            <Pressable onPress={() => router.back()} style={styles.iconButton}>
                <Feather name="arrow-left" size={24} color="#161616" />
            </Pressable>
            <Pressable onPress={onToggleFavorite} style={styles.iconButton}>
                <AntDesign
                    name="heart"
                    size={24}
                    color={isFavorite ? "#EB001B" : "#161616"}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    iconButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: '#ffffff',
    },
});