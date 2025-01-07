import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Pressable, StyleSheet, View } from "react-native";

interface SearchSwitchProps {
    mode: "store" | "snack";
    switchMode: () => void;
}

export default function SearchSwitch({ mode, switchMode }: SearchSwitchProps) {
    return (
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
    )
}

const styles = StyleSheet.create({
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
});