import { useState, useEffect } from "react";
import { AddressInterface } from "../../../../../interfaces/address.interface";
import {View, StyleSheet,Text, TextInput, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import AddressInput from "../../../../../components/addressInput";
import FormInput from "../../../../../components/FormInput";
import LinkButton from "../../../../../components/LinkButton";
import { router } from "expo-router";
import Header from "../../../../../components/Profile/Header";

export default function EditAddress()
{   

    const { address } = useLocalSearchParams();
    
    const [cep, setCep] = useState<string | undefined> (undefined);
    const [rua, setRua] = useState<string | undefined> (undefined);
    const [cidade, setCidade] = useState<string | undefined> (undefined);
    const [estado, setEstado] = useState<string | undefined> (undefined);
    
    useEffect(() => {
        if (address) {
            const addressString = Array.isArray(address) ? address[0] : address;
            const parsedAddress = JSON.parse(addressString) as AddressInterface;
            
            setCep(parsedAddress.cep);
            setRua(parsedAddress.rua);
            setCidade(parsedAddress.cidade);
            setEstado(parsedAddress.estado);
        }
    }, [address])

    const back = () => {
        router.back();
    }
    
    return(
        <View style={styles.safe}>
            <Header title= "Editar Endereço" onBack={back}/>
            <View style={styles.container}>
                <View style = {styles.view}>
                    <FormInput
                        label={"CEP"}
                        onChangeText={setCep}
                        placeholder="CEP"
                        value = {cep}
                    />
                
                    <FormInput
                        label={"Cidade"}
                        onChangeText={setCidade}
                        placeholder="Cidade"
                        value = {cidade}
                    />
                
                    <FormInput
                        label={"Estado"}
                        onChangeText={setEstado}
                        placeholder="Estado"
                        value = {estado}

                    />
        
                    <FormInput
                        label={"Rua"}
                        onChangeText={setRua}
                        placeholder="Rua"
                        value = {rua}

                    />

                    <LinkButton title="Salvar"/>
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
    view:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems : "center",
        width: "70%",
        flex: 1,
    },
});