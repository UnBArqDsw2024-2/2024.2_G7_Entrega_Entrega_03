
import { useEffect, useState } from "react";
import { Button, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { storeService } from "../../../api/services/store.service";
import { Store } from "../../../interfaces/store.interface";
import Caroussel from "../../../components/Caroussel";
import StoreItem from "../../../components/search/StoreItem";
import SearchBar from '../../../components/search/SearchBar';
import ProductItem from '../../../components/search/ProductItem';
import SearchSwitch from "../../../components/search/SearchSwitch";
import { SearchStrategy, SnackSearchStrategy, StoreSearchStrategy } from "../../../interfaces/searchStrategies";

// Mock de produtos
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
}

const productsMock: Product[] = [
    {
        id: 1,
        name: "Hamburguer",
        price: 10,
        image: "",
        description: "Hamburguer de carne bovina",
        category: "Lanche",
    },
    {
        id: 2,
        name: "Coca-cola",
        price: 5,
        image: "",
        description: "Refrigerante de cola",
        category: "Bebida",
    },
    {
        id: 3,
        name: "Batata frita",
        price: 8,
        image: "",
        description: "Batata frita crocante",
        category: "Acompanhamento",
    },
    {
        id: 4,
        name: "Pizza",
        price: 30,
        image: "",
        description: "Pizza de calabresa",
        category: "Lanche",
    },
    {
        id: 5,
        name: "Cerveja",
        price: 7,
        image: "",
        description: "Cerveja gelada",
        category: "Bebida",
    },
    {
        id: 6,
        name: "Salada",
        price: 15,
        image: "",
        description: "Salada de alface, tomate e cenoura",
        category: "Acompanhamento",
    },
    {
        id: 7,
        name: "Hot dog",
        price: 12,
        image: "",
        description: "Pão com salsicha e molho",
        category: "Lanche",
    },
    {
        id: 8,
        name: "Suco",
        price: 6,
        image: "",
        description: "Suco de laranja",
        category: "Bebida",
    },
    {
        id: 9,
        name: "Onion rings",
        price: 10,
        image: "",
        description: "Anéis de cebola empanados",
        category: "Acompanhamento",
    },
]

export default function Search() {
    // Estado para controlar o modo de busca (lojas ou lanches)
    const [mode, setMode] = useState<"store" | "snack">("store");
    const [search, setSearch] = useState<string>("");

    const [stores, setStores] = useState<Store[]>([]);
    const [products, setProducts] = useState<Product[]>(productsMock);

    // Guarda o estado da estratégia de busca atual
    const [searchStrategy, setSearchStrategy] = useState<SearchStrategy<Store | Product>>(new StoreSearchStrategy());

    // Busca as lojas ao iniciar o componente
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

    // Função para alternar entre os modos de busca
    const switchMode = () => {
        const newMode = mode === "store" ? "snack" : "store";
        setMode(newMode);
        setSearchStrategy(newMode === "store" ? new StoreSearchStrategy() : new SnackSearchStrategy());
    }

    // Função para limpar a busca
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

                {/* Lista de resultados da busca, utilizando a estratégia de busca atual */}
                {search !== "" && 
                    <FlatList
                        data={searchStrategy.filter(
                            mode === "store" ? stores : products,
                            search
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            // Está função atua como um factory method, retornando o componente correto de acordo com o modo de busca
                            mode === "store" ? <StoreItem store={item as Store} /> : <ProductItem product={item as Product} />
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
