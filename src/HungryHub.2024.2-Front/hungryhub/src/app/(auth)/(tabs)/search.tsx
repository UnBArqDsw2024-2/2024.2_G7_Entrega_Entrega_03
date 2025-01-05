
import { useEffect, useState } from "react";
import { Button, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { storeService } from "../../../api/services/store.service";
import { Store } from "../../../interfaces/store.interface";
import Caroussel from "../../../components/Caroussel";
import StoreItem from "../../../components/search/StoreItem";
import SearchBar from '../../../components/search/SearchBar';
import ProductItem from '../../../components/search/ProductItem';
import SearchSwitch from "../../../components/search/SearchSwitch";

// Mock de produtos
export interface Product {
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
}

const products: Product[] = [
    {
        name: "Hamburguer",
        price: 10,
        image: "",
        description: "Hamburguer de carne bovina",
        category: "Lanche",
    },
    {
        name: "Coca-cola",
        price: 5,
        image: "",
        description: "Lata de coca-cola",
        category: "Bebida",
    },
    {
        name: "Batata frita",
        price: 8,
        image: "",
        description: "Porção de batata frita",
        category: "Acompanhamento",
    },
    {
        name: "Hamburguer",
        price: 10,
        image: "",
        description: "Hamburguer de carne bovina",
        category: "Lanche",
    },
    {
        name: "Coca-cola",
        price: 5,
        image: "",
        description: "Lata de coca-cola",
        category: "Bebida",
    },
    {
        name: "Batata frita",
        price: 8,
        image: "",
        description: "Porção de batata frita",
        category: "Acompanhamento",
    },
    {
        name: "Hamburguer",
        price: 10,
        image: "",
        description: "Hamburguer de carne bovina",
        category: "Lanche",
    },
    {
        name: "Coca-cola",
        price: 5,
        image: "",
        description: "Lata de coca-cola",
        category: "Bebida",
    },
    {
        name: "Batata frita",
        price: 8,
        image: "",
        description: "Porção de batata frita",
        category: "Acompanhamento",
    },
    {
        name: "Hamburguer",
        price: 10,
        image: "",
        description: "Hamburguer de carne bovina",
        category: "Lanche",
    },
    {
        name: "Coca-cola",
        price: 5,
        image: "",
        description: "Lata de coca-cola",
        category: "Bebida",
    },
    {
        name: "Batata frita",
        price: 8,
        image: "",
        description: "Porção de batata frita",
        category: "Acompanhamento",
    },
    {
        name: "Hamburguer",
        price: 10,
        image: "",
        description: "Hamburguer de carne bovina",
        category: "Lanche",
    },
    {
        name: "Coca-cola",
        price: 5,
        image: "",
        description: "Lata de coca-cola",
        category: "Bebida",
    },
    {
        name: "Batata frita",
        price: 8,
        image: "",
        description: "Porção de batata frita",
        category: "Acompanhamento",
    },
]

export default function Search() {
    const [mode, setMode] = useState<"store" | "snack">("store");
    const [search, setSearch] = useState<string>("");

    const [stores, setStores] = useState<Store[]>([]);

    useEffect(() => {
        const getStores = async () => {
            try {
                const response = await storeService.getStores();
                setStores(response);
            } catch (err) {
                console.error(err);
            }
        }
        getStores();
    }, []);

    const switchMode = () => {
        setMode(mode === "store" ? "snack" : "store");
    }

    const clearSearch = () => {
        setSearch("");
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <SearchBar 
                    search={search} 
                    setSearch={setSearch} 
                    clearSearch={clearSearch} 
                    placeholder={mode === "store" ? "Buscar lojas" : "Buscar lanches"}
                />
                <SearchSwitch mode={mode} switchMode={switchMode} />
            </View>
            
            <View style={styles.searchContent}>
                {search === "" &&
                    <View style={styles.carrouselContainer}>
                        <Caroussel />
                        <Caroussel />
                        <Caroussel />
                        <Caroussel />
                    </View>
                }

                {search !== "" && mode === "store" && 
                    <FlatList
                        data={stores.filter(store => store.first_name.toLowerCase().includes(search.toLowerCase()))}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <StoreItem store={item} />
                        )}
                        contentContainerStyle={styles.searchList}
                        ListEmptyComponent={<Text style={styles.noResults}>Nenhum resultado encontrado.</Text>}
                    />
                }

                {search !== "" && mode === "snack" &&
                    <FlatList
                        data={products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => (
                            <ProductItem product={item} />
                        )}
                        contentContainerStyle={styles.searchList}
                        ListEmptyComponent={<Text style={styles.noResults}>Nenhum resultado encontrado.</Text>}
                    />
                }
                
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    searchBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        width: "100%",
        padding: 20,
    },
    searchContent: {
        flex: 1,
        width: "100%",
        padding: 20,
    },
    searchList: {
        rowGap: 10,
    },
    carrouselContainer: {
        width: "100%",
        height: "100%",
    },
    noResults: {
        textAlign: "center",
        color: "#666",
        fontSize: 16,
        marginTop: 20,
    },

})
