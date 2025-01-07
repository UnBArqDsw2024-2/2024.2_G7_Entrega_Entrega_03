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
import { productService } from "../../../api/services/product.service";
import { Product } from "../../../interfaces/product.interface";
import { router } from "expo-router";

export default function Search() {
    // Estado para controlar o modo de busca (lojas ou lanches)
    const [mode, setMode] = useState<"store" | "snack">("store");
    const [search, setSearch] = useState<string>("");

    const [stores, setStores] = useState<Store[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

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
        const getProducts = async () => {
            try {
                const response = await productService.getProducts();
                setProducts(response);
            } catch (err) {
                console.error(err);
            }
        }
        getStores();
        getProducts();
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

    const navigateToProductDetails = (productId : number) => {
        router.push({
            pathname: `/product/${productId}`,
        })
    }

    const navigateToStoreDetails = (storeId : number) => {
        router.push({
            pathname: `/storeDetails/${storeId}`,
        })
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
                        <Caroussel title="Com melhores avaliações" items={products} />
                        <Caroussel title="Perto de você" items={products} />
                        <Caroussel title="Visto com frequência" items={products} />
                        <Caroussel title="Pratos principais" items={products} />
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
                            mode === "store" ? 
                                <StoreItem store={item as Store} handleNavigation={navigateToStoreDetails} />
                                : <ProductItem product={item as Product} handleNavigation={navigateToProductDetails} />
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
