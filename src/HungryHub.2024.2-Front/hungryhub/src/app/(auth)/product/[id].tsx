import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Link, router, useLocalSearchParams } from "expo-router";
import { AntDesign, Feather } from '@expo/vector-icons';
import LinkButton from "../../../components/LinkButton";
import { useFavorites } from "../../patterns/FavoriteObserver";
import { Product } from "../../../interfaces/product.interface";
import { productService } from "../../../api/services/product.service";
import Toast from "react-native-toast-message";

export default function ProductScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);
    //const { addToCart } = useCart();
    const { toggleFavorite, isFavorite } = useFavorites();


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await productService.getProductById(id);
                setProduct(response);
            } catch (err) {
                console.error('Erro ao buscar o produto', err);
                Toast.show({
                    type: 'error',
                    text1: 'Erro ao buscar o produto',
                    text2: 'Produto não encontrado',
                })
            } 
        };

        fetchProduct();
    }, [id]); 

    // const handleAddToCart = () => {
    //     if (product) {
    //         addToCart(product.id, quantity);
    //         //router.back();
    //     }
    // };

    if (!product) return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.iconButton}>
                    <Feather name="arrow-left" size={24} color="#161616" />
                </Pressable>
            </View>
        </View>
    );

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
                source={{ uri: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.title}>{product.name}</Text>

                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>★ 4,7</Text> {/* mock */}
                    <Text>•</Text>
                    <Text>1600+ Vendas</Text> {/* mock */}
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
                <View style={styles.buttonContainer}>
                    <LinkButton title="Adicionar ao carrinho" />
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
        height: 300,
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
        fontSize: 16,
        flex: 1,
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
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});