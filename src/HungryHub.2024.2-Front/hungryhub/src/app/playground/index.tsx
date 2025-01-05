// screens/Playground.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Product } from '../../interfaces/product.interface';
import ProductScreen from '../(auth)/product/[id]';

// Mock do produto
const mockProduct: Product = {
    id: '1',
    name: 'Pizza Margherita',
    description: 'Deliciosa pizza com molho de tomate, mussarela de búfala e manjericão fresco.',
    price: 45.90,
    image: 'https://picsum.photos/400/300',
    rating: 4.8,
    isFavorite: true,
    sales: 1500
};

// Mock dos hooks como componente wrapper
const WithMocks = ({ children }: { children: React.ReactNode }) => {
    // Sobrescreve os hooks originais
    const mockHooks = {
        useCart: () => ({
            addToCart: () => console.log('Adicionado ao carrinho')
        }),
        useFavorites: () => ({
            toggleFavorite: () => console.log('Favoritado'),
            isFavorite: () => false
        }),
        useLocalSearchParams: () => ({ id: '1' }),
        router: {
            back: () => console.log('Voltar')
        }
    };

    if (typeof window !== 'undefined') {
        window.fetch = () =>
            Promise.resolve({
                json: () => Promise.resolve(mockProduct)
            } as Response);
    }

    return children;
};

export default function ComponentPlayground() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Product Preview</Text>
                </View>

                <View style={styles.content}>
                    <WithMocks>
                        <ProductScreen />
                    </WithMocks>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1
    },
    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    content: {
        flex: 1
    }
});