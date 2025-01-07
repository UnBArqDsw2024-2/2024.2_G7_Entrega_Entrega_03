import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProductCard from './ProductCard';
import { Product } from '../interfaces/product.interface';

interface ProductSectionProps {
    title: string;
    products: Product[];
    onProductPress: (product: Product) => void;
}

export default function ProductSection({ title, products, onProductPress }: ProductSectionProps) {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.productsRow}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onPress={() => onProductPress(product)}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 15,
    },
    productsRow: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
});