import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable } from "react-native";
import Header from '../../../../../components/Profile/Header';
import { router } from "expo-router";
import { AddressInterface } from "../../../../../interfaces/address.interface";
import { useEffect, useState } from "react";
import { addressService } from "../../../../../api/services/address.service";
import { useAuth } from "../../../../../context/AuthProvider";
import Toast from "react-native-toast-message";

export default function addresses() {
    const [addresses, setAddresses] = useState<AddressInterface[]>([]);
    const { user } = useAuth();
    
    useEffect(() => {
        
        if (!user) {
            console.error("Usuário não encontrado");
            return;
        }

        const getUserAddresses = async () => {
            try {
                const response = await addressService.getUserAddresses(user.id);
                console.log(response);
                setAddresses(response.addresses);
            } catch (err) {
                console.error(err);
                Toast.show({
                    type: "error",
                    text1: "Erro ao obter os endereços",
                    text2: "Verifique sua conexão"
                })
            }
        }
        getUserAddresses();
    }, [])

    const back = () => {
        router.back();
    }

    // const address = {
    //     cep: "12345",
    //     rua: "Main St",
    //     cidade: "City",
    //     estado: "State",
    // };

    const navigateEdit = () => {
        router.push({
            pathname: "/(tabs)/profile/addresses/editAddress",
            // params: { address: JSON.stringify(address) }
        })
    }

    return (
        <SafeAreaView style={styles.safe}>
            <Header title="Endereços" onBack={back} />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    <Pressable
                        onPress={navigateEdit}>
                        <Text style={styles.text}>Editar novo endereço</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContent: {
        flexGrow: 1,
        // justifyContent: 'center', // Centraliza verticalmente
        // alignItems: 'center', // Centraliza horizontalmente
    },
    text: {
        fontSize: 20,
    },
    safe: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});