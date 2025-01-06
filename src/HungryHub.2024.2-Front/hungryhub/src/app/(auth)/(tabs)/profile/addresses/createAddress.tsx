import { useState, useEffect } from "react";
import { AddressInterface, AddressBody } from "../../../../../interfaces/address.interface";
import {View, StyleSheet,Text, TextInput, Pressable } from "react-native";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import FormInput from "../../../../../components/FormInput";
import LinkButton from "../../../../../components/LinkButton";
import { router } from "expo-router";
import Header from "../../../../../components/Profile/Header";
import { addressService } from "../../../../../api/services/address.service";
import Toast from "react-native-toast-message";

export default function createAddress() {   
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    
    const back = () => {
        router.replace({
            pathname: "/(tabs)/profile/addresses",
        })
    }
    
    const handleSubmit = async () => { 
        try {
            const addressData : AddressBody = {
                cep,
                rua,
                cidade,
                estado
            }
            const response = await addressService.createAddress(addressData);
            router.replace({
                pathname: "/(tabs)/profile/addresses",
            });
            setCep("");
            setCidade("");
            setEstado("");
            setRua("");
        } catch (e) {
            console.error(e);
            Toast.show({
                type: "error",
                text1: "Erro ao criar o endereços",
                text2: "Verifique os campos e tente novamente"
            })
        }
    }

    // TODO: validação dos campos
        
    return(
        <View style={styles.safe}>
            <Header title= "Criar Endereço" onBack={back}/>
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

                    <LinkButton title="Salvar" onPress={handleSubmit}/>
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