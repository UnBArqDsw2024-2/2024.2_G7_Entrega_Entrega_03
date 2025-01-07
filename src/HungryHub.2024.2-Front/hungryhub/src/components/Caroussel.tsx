import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Product } from "../interfaces/product.interface";

interface CarousselProps {
    title: string;
    items: Product[];
}

export default function Caroussel({ title, items }: CarousselProps) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {items.length ? (
                <ScrollView 
                    contentContainerStyle={{ columnGap: 10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={styles.itemsContainer}
                >
                    {items.map((item, index) => (
                        <View style={styles.item}>
                            <Link style={styles.link} href={`/(auth)/product/${item.id}`}>
                                <Image style={styles.image} source={{ uri: "https://abrale.org.br/wp-content/uploads/2022/07/shutterstock_288575585.jpg" }} />
                            </Link>
                            <View style={styles.textContainer}>
                                <Text numberOfLines={2} style={styles.itemTitle}>{item.name}</Text>                        
                            </View>  
                        </View>
                    ))}
                </ScrollView>
            ) : (    
                <Text style={styles.noContent}>
                    Nenhum item encontrado
                </Text>
            )}
            
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 170,
        marginBottom: 15,
    },
    itemTitle:{
        width: "100%",
        fontSize: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        height: 20,
        marginBottom: 5,
    },
    itemsContainer: {
        flex: 1,
        paddingBottom: 10,
    },
    item: {
        flex: 1,
        width: 140,
        height: "100%",
        alignItems: "center",
        elevation: 2,
        borderRadius: 20,
        overflow: "hidden",
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    link: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    textContainer: {
        width: "100%",
        height: 50,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    noContent: {
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#666",
        fontSize: 16,
        marginTop: 20,
    },
});