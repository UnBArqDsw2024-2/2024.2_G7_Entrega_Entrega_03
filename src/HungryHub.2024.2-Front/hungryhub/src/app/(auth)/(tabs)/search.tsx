import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useEffect, useState } from "react";
import { Button, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { storeService } from "../../../api/services/store.service";
import { Store } from "../../../interfaces/store.interface";
import Caroussel from "../../../components/Caroussel";
import StoreItem from "../../../components/StoreItem";
import SearchBar from '../../../components/SearchBar';

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
                <Pressable
                    style={styles.modeSwitch}
                    onPress={switchMode}
                >   
                    <View style={mode === "store" ? styles.activeMode : styles.disabledMode}>
                        <FontAwesome6 name="store" size={24} color="black" />
                    </View>
                    <View style={mode === "snack" ? styles.activeMode : styles.disabledMode}>
                        <FontAwesome6 name="burger" size={24} color="black" />
                    </View>
                </Pressable>
            </View>
            <View style={styles.searchContent}>
                {search === "" &&
                    <View style={styles.carrouselContainer}>
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
                        contentContainerStyle={styles.storesList}
                        ListEmptyComponent={<Text style={styles.noResults}>Nenhum resultado encontrado.</Text>}
                    />
                }

                {search !== "" && mode === "snack" && 
                    <Text>Buscando lanches...</Text>
                    // backend de produtos ainda nao implementado
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
    modeSwitch: {
        flexDirection: "row",
        backgroundColor: "#D4D4D4",
        padding: 5,
        borderRadius: 50,
    },
    activeMode: {
        backgroundColor: "#f79e1b",
        padding: 5,
        borderRadius: 20,
    },
    disabledMode: {
        padding: 5,
        borderRadius: 20,
    },
    searchContent: {
        width: "100%",
        padding: 20,
    },
    carrouselContainer: {
        width: "100%",
        height: "100%",
    },
    storesList: {
        paddingVertical: 10,
    },
    noResults: {
        textAlign: "center",
        color: "#666",
        fontSize: 16,
        marginTop: 20,
    },
})
