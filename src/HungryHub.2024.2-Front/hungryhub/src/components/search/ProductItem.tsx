import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../../interfaces/product.interface";
import PressableItem from "./PressableItem";

interface ProductItemProps {
    product: Product;
    handleNavigation: (productId: number) => void;
}

export default function ProductItem({ product, handleNavigation }: ProductItemProps) {
    return (
        <PressableItem item={product} handleNavigation={handleNavigation}>
            <Image
                source={{ uri: "https://via.placeholder.com/50" }} // Imagem mock
                style={styles.productImage}
            />
            <View style={styles.productInfo}>
                <View style={styles.productInfoLeft}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>R$ {product.price}</Text>
                </View>
                <View style={styles.productInfoRight}>
                    <Text style={styles.productRating}>⭐ 4.8</Text> {/* Mock */}
                    <Text style={styles.productDistance}>1.2 km</Text> {/* Mock */}
                </View>
            </View>
        </PressableItem>
    )
}

const styles = StyleSheet.create({
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    productInfo: {
        flex: 1,
        flexDirection: "row",
    },
    productInfoLeft: {
        flex: 1,
    },
    productInfoRight: {
        alignItems: "center"
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    productPrice: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    productRating: {
        fontSize: 14,
        color: "#FFA500",
    },
    productDistance: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },
});