import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { AntDesign, Feather } from '@expo/vector-icons';
import LinkButton from "../../../components/LinkButton";
import { useFavorites } from "../../patterns/FavoriteObserver";
import { Product } from "../../../interfaces/product.interface";


const mockProduct: Product = {
    id: '1',
    name: 'Pizza',
    description: 'Pizza com refrigerante',
    price: 40.90,
    rating: 4.7,
    isFavorite: false,
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    sales: 1600
};

export default function ProductScreen() {
    const params = useLocalSearchParams();
    //const { id } = useLocalSearchParams();
    //const [product, setProduct] = useState<Product | null>(null);
    const [product, setProduct] = useState<Product>(mockProduct);
    const [quantity, setQuantity] = useState(1);
    //const { addToCart } = useCart();
    const { toggleFavorite, isFavorite } = useFavorites();


    /*useEffect(() => {
    //mock da chamada api
    const fetchProduct = async () => {
        try {
            const response = await fetch(`/api/products/${id}`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error('Erro ao buscar o produto', error);
        } 
    };

    fetchProduct();
}, [id]); 

    const handleAddToCart = () => {
        if (product) {
            addToCart(product.id, quantity);
            //router.back();
        }
    };

    */

    if (!product) return null;

    const productIsFavorite = isFavorite(product.id);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.iconButton}>
                    <Feather name="arrow-left" size={24} color="#161616" />
                </Pressable>
                <Pressable
                    onPress={() => toggleFavorite(product.id)}
                    style={styles.iconButton}
                >
                    <AntDesign
                        name="heart"
                        size={24}
                        color={productIsFavorite ? "#EB001B" : "#161616"}
                    />
                </Pressable>
            </View>

            <Image
                source={{ uri: product.image }}
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.title}>{product.name}</Text>

                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>★ {product.rating}</Text>
                    <Text>•</Text>
                    <Text>{product.sales}+ Vendas</Text>
                </View>

                <Text style={styles.description}>{product.description}</Text>

                <View style={styles.footer}>
                    <View style={styles.quantityContainer}>
                        <Pressable
                            onPress={() => setQuantity(q => Math.max(1, q - 1))}
                            style={styles.quantityButton}
                        >
                            <AntDesign name="minus" size={20} color="#161616" />
                        </Pressable>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <Pressable
                            onPress={() => setQuantity(q => q + 1)}
                            style={styles.quantityButton}
                        >
                            <AntDesign name="plus" size={20} color="#161616" />
                        </Pressable>
                    </View>
                    <Text style={styles.price}>
                        R$ {(product.price * quantity).toFixed(2)}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    iconButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
    },
    rating: {
        color: '#EB001B',
    },
    description: {
        color: '#666',
        marginBottom: 24,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
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
    price: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});