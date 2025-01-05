import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Store } from "../../interfaces/store.interface";
import { Link, router } from "expo-router";

interface StoreItemProps {
    store: Store;
}

export default function StoreItem({ store }: StoreItemProps) {
    const handleNavigation = () => {
        router.push({
            pathname: `/storeDetails/${store.id}`,
        })
    }

    return (
        <Pressable 
            style={styles.storeItem}
            onPress={handleNavigation}
        >
            <View style={styles.storeInfo}>
                <Text style={styles.storeName}>{store.first_name}</Text>
                <View style={styles.storeDetails}>
                    <Text style={styles.storeRating}>⭐ 4.8</Text> {/* Mock */}
                    <Text style={styles.storeDistance}>1.2 km</Text> {/* Mock */}
                </View>
            </View>
            <Image
                source={{ uri: "https://via.placeholder.com/50" }} // Imagem mock
                style={styles.storeImage}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    storeItem: {
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
    storeImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    storeInfo: {
        flex: 1,
    },
    storeName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    storeDetails: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    storeRating: {
        fontSize: 14,
        color: "#FFA500",
        marginRight: 10,
    },
    storeDistance: {
        fontSize: 14,
        color: "#666",
    },
});