import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../../app/(auth)/(tabs)/search";

interface ProductItemProps {
    product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
    return (
        <Pressable
            style={styles.productItem}
            onPress={() => {}} // TODO: Implementar navegação
        >
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
        </Pressable>
    )
}

const styles = StyleSheet.create({
    productItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
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