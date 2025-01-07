import { Icon } from "react-native-elements";
import { AddressInterface } from "../../interfaces/address.interface";
import { StyleSheet, View, Text } from 'react-native';

interface AddressProps  extends AddressInterface {
    
}

export default function AddressCard({id, cidade, estado, rua, cep} : AddressProps) {


    return (
        <View style={styles.container}>
            <Icon name="map-marker" type="font-awesome" size={25} color="#000" />
            <Text style={styles.text}>{cep}, {rua}, {cidade}, {estado}</Text>
            <Icon name="chevron-right" type="font-awesome" size={20} color="#000" />
        </View>
    );
}    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#d9d9d9",
        borderRadius: 20,
        width: "100%",
        minHeight: 70,
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    text: {
        width: "100%",
        fontSize: 16,
        margin: 5,
    }
});