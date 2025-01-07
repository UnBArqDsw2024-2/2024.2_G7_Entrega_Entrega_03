import { Image, Text, View } from "react-native";
import { Product } from "../app/(auth)/(tabs)/search";

interface ProductItemProps {
    product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
    return (
        <View style={styles.productItem}>
            <Image
                source={{ uri: "https://via.placeholder.com/50" }} // Imagem mock
                style={styles.productImage}
            />
            <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>R$ {product.price}</Text>
            </View>
        </View>
    )
}