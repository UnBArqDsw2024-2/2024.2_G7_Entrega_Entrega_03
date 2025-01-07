import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable } from "react-native";
import Header from '../../../../../components/Profile/Header';
import { router } from "expo-router";
import { AddressInterface } from "../../../../../interfaces/address.interface";
import { useEffect, useState } from "react";
import { addressService } from "../../../../../api/services/address.service";
import { useAuth } from "../../../../../context/AuthProvider";
import Toast from "react-native-toast-message";
import LinkButton from "../../../../../components/LinkButton";
import AddressCard from "../../../../../components/Profile/AddressCard";

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
                setAddresses(response);
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
        router.replace({pathname: "/(tabs)/profile"});
    }

    const navigateEdit = (address: AddressInterface) => {
        router.push({
            pathname: "/(tabs)/profile/addresses/editAddress",
            params: { address: JSON.stringify(address) }
        })
    }

    const navigateCreate = () => {
        router.push({
            pathname: "/(tabs)/profile/addresses/createAddress",
        })
    }

    return (
        <SafeAreaView style={styles.safe}>
            <Header title="Endereços" onBack={back} />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    {addresses?.map((address) => (
                        <Pressable
                            key={address.id}
                            onPress={() => navigateEdit(address)}
                            style={styles.cardButton}
                        >
                            <AddressCard
                                
                                cep={address.cep}
                                cidade={address.cidade}
                                estado={address.estado}
                                id={address.id}
                                rua={address.rua}
                            />
                        </Pressable>
                    ))}
                    
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <LinkButton title="Criar novo endereço" onPress={navigateCreate} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        width: "100%",
        paddingHorizontal: 40,
        alignItems: 'center',
        gap: 20
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
    },
    text: {
        fontSize: 20,
    },
    safe: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    buttonContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40,
        opacity: 10
    },
    cardButton: {
        width: "100%",
        padding: 0,
        margin: 0
    }
});