import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Product } from '../interfaces/product.interface';

interface ProductCardProps {
    product: Product;
    onPress: () => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
    return (
        <Pressable onPress={onPress} style={styles.card}>
            <Image
                source={{ uri: product.image }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.info}>
                <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
                <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 150,
        marginHorizontal: 5,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    image: {
        width: '100%',
        height: 100,
    },
    info: {
        padding: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: '500',
    },
    price: {
        fontSize: 16,
        color: '#EB001B',
        fontWeight: 'bold',
        marginTop: 5,
    },
});