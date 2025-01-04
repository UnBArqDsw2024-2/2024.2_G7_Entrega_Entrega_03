import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Caroussel() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Title</Text>
            <ScrollView 
                contentContainerStyle={{ columnGap: 10 }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.itemsContainer}
            >
                <View style={styles.item}>
                    <Link style={styles.link} href="">
                        <Image style={styles.image} source={{ uri: "https://abrale.org.br/wp-content/uploads/2022/07/shutterstock_288575585.jpg" }} />
                    </Link>    
                    <Text numberOfLines={1} style={styles.itemTitle}>Hamburguer de siri ssssssss</Text>
                </View>
                <View style={styles.item}>
                    <Link style={styles.link} href="">
                        <Image style={styles.image} source={{ uri: "https://abrale.org.br/wp-content/uploads/2022/07/shutterstock_288575585.jpg" }} />
                    </Link>
                    <Text numberOfLines={1} style={styles.itemTitle}>Title</Text>
                </View>
                <View style={styles.item}>
                    <Link style={styles.link} href="">
                        <Image style={styles.image} source={{ uri: "https://abrale.org.br/wp-content/uploads/2022/07/shutterstock_288575585.jpg" }} />
                    </Link>
                    <Text numberOfLines={1} style={styles.itemTitle}>Title</Text>
                </View>
                <View style={styles.item}>
                    <Link style={styles.link} href="">
                        <Image style={styles.image} source={{ uri: "https://abrale.org.br/wp-content/uploads/2022/07/shutterstock_288575585.jpg" }} />
                    </Link>
                    <Text numberOfLines={1} style={styles.itemTitle}>Title</Text>
                </View>
                <View style={styles.item}>
                    <Link style={styles.link} href="">
                        <Image style={styles.image} source={{ uri: "https://abrale.org.br/wp-content/uploads/2022/07/shutterstock_288575585.jpg" }} />
                    </Link>
                    <Text numberOfLines={1} style={styles.itemTitle}>Title</Text>
                </View>
            </ScrollView>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 170,
        marginBottom: 5,
    },
    itemTitle:{
        width: "100%",
        height: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        height: 20,
        marginBottom: 5,
    },
    itemsContainer: {
        height: 140,
    },
    item: {
        flex: 1,
        width: 140,
        height: "100%",
        alignItems: "center",
    },
    link: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    }
});