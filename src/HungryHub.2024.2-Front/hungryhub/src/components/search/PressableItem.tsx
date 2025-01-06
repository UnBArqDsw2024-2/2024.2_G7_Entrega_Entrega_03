import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../../interfaces/product.interface";
import { Store } from "../../interfaces/store.interface";

interface PressableItemProps {
    item: Product | Store;
    handleNavigation: (productId: number) => void;
    children: React.ReactNode;
}

export default function PressableItem({ item, handleNavigation, children }: PressableItemProps) {
    return(
        <Pressable
            style={styles.pressableItem}
            onPress={() => handleNavigation(item.id)} // TODO: Implementar navegação
        >
            {children}
        </Pressable>
    )
};

const styles = StyleSheet.create({
    pressableItem: {
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
});