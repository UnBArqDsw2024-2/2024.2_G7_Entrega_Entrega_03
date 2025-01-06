import { useState, useEffect } from "react";
import { AddressInterface, AddressBody } from "../../../../../interfaces/address.interface";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import FormInput from "../../../../../components/FormInput";
import LinkButton from "../../../../../components/LinkButton";
import { router } from "expo-router";
import Header from "../../../../../components/Profile/Header";
import { addressService } from "../../../../../api/services/address.service";
import { Icon } from "react-native-elements";
import Toast from "react-native-toast-message";

export default function EditAddress() {

    const { address } = useLocalSearchParams();

    const [id, setId] = useState<number | undefined>(0)
    const [cep, setCep] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");

    useEffect(() => {
        if (address) {
            const addressString = Array.isArray(address) ? address[0] : address;
            const parsedAddress = JSON.parse(addressString) as AddressInterface;
            
            setId(parsedAddress.id);
            setCep(parsedAddress.cep);
            setRua(parsedAddress.rua);
            setCidade(parsedAddress.cidade);
            setEstado(parsedAddress.estado);
        }
    }, [address])

    const back = () => {
        router.replace({pathname: "/(tabs)/profile/addresses"});
    }

    const deleteAddress = async () => {

        if (id !== undefined) {
            try {
                await addressService.deleteAddress(id);
                router.replace({
                    pathname: "/(tabs)/profile/addresses",
                });
            } catch (e) {
                console.log("Delete");
                console.error(e);
            }
        } else {
            console.error("Address ID is undefined");
        }
    }
    
    const updateAddress = async () => { 
        if (id !== undefined) {
            const addressData : AddressBody = {
                cep,
                rua,
                cidade,
                estado
            }
            try {
                await addressService.updateAddress(addressData, id);
                router.replace({
                    pathname: "/(tabs)/profile/addresses",
                });
            } catch (e) {
                console.error(e);
                Toast.show({
                    type: "error",
                    text1: "Erro ao criar o endereços",
                    text2: "Verifique os campos e tente novamente"
                })
            }
        } else {
            console.error("ID is undefined");
        }
    }

    return (
        <View style={styles.safe}>
            <Header title="Editar Endereço" onBack={back} />
            <View style={styles.container}>
                <View style={styles.view}>
                    <FormInput
                        label={"CEP"}
                        onChangeText={setCep}
                        placeholder="CEP"
                        value={cep}
                    />

                    <FormInput
                        label={"Cidade"}
                        onChangeText={setCidade}
                        placeholder="Cidade"
                        value={cidade}
                    />

                    <FormInput
                        label={"Estado"}
                        onChangeText={setEstado}
                        placeholder="Estado"
                        value={estado}

                    />

                    <FormInput
                        label={"Rua"}
                        onChangeText={setRua}
                        placeholder="Rua"
                        value={rua}

                    />

                    <LinkButton title="Salvar" onPress={updateAddress} />

                    <Pressable onPress={deleteAddress}>
                        <Icon name="trash" type="font-awesome" size={30} color="red" />
                    </Pressable>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    container: {
        width: "100%",
        paddingTop: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    view: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        flex: 1,
    },
});