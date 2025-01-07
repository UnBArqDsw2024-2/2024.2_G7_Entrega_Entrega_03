import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Pressable, StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
    search: string;
    setSearch: (text: string) => void;
    placeholder: string;
    clearSearch: () => void;
}

export default function SearchBar({ search, setSearch, placeholder, clearSearch }: SearchBarProps) {
    return (
        <View style={styles.searchBar}>
            <FontAwesome6 name="magnifying-glass" size={24} color="black" />
            <TextInput
                style={styles.searchInput}
                placeholder={placeholder}
                value={search}
                onChangeText={setSearch}
                placeholderTextColor={"#161616"}
            />
            <Pressable onPress={clearSearch}>
                <FontAwesome6 name="xmark" size={24} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D4D4D4",
        paddingHorizontal: 15,
        borderRadius: 50,
        padding: 10,
        gap: 10,
    },
    searchInput: {
        width: "100%",
        borderWidth: 0,
        outlineStyle: 'none', // Não é um erro, é uma propriedade válida
        fontSize: 16,
    },
});