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

// Regex para validar o CEP, deve conter 8 dígitos
const cepRegex = /^[0-9]{8}$/;

// Regex para validar o estado, deve conter 2 letras
const estadoRegex = /^[A-Z]{2}$/;

// Regex para validar a cidade, deve conter apenas letras e no máximo 50 caracteres
const cidadeRegex = /^[a-zA-Z\s]{1,50}$/;

// Regex para validar a rua, deve conter letras e números, além de no máxiomo 50 caracteres
const ruaRegex = /^[a-zA-Z0-9\s]{1,50}$/;

export default function createAddress() {   
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    const [formErrors, setFormErrors] = useState({
        cep: "",
        rua: "",
        cidade: "",
        estado: "",
    });

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (cep && !cepRegex.test(cep)) {
            setFormErrors({ ...formErrors, cep: "CEP inválido. Deve conter exatamente 8 dígitos" });
        } else {
            setFormErrors({ ...formErrors, cep: "" });
        }
    }, [cep]);

    useEffect(() => {
        if (rua && !ruaRegex.test(rua)) {
            setFormErrors({ ...formErrors, rua: "Rua inválida. Deve conter entre 1 e 50 caracteres sendo apenas números e/ou dígitos" });
        } else {
            setFormErrors({ ...formErrors, rua: "" });
        }
    }, [rua]);  

    useEffect(() => {
        if (cidade && !cidadeRegex.test(cidade)) {
            setFormErrors({ ...formErrors, cidade: "Cidade inválida. Deve conter entre 1 e 50 caracteres" });
        } else {
            setFormErrors({ ...formErrors, cidade: "" });
        }
    }, [cidade]);

    useEffect(() => {
        if (estado && !estadoRegex.test(estado)) {
            setFormErrors({ ...formErrors, estado: "Estado inválido. Deve conter apenas duas letras maiúsculas" });
        } else {
            setFormErrors({ ...formErrors, estado: "" });
        }
    }, [estado]);

    // Verifica se não há erros
    useEffect(() => {
        const valid = Object.values(formErrors).every((error) => error === "");
        setFormValid(valid);
    }, [formErrors]);
    
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
                        error = {formErrors.cep}
                    />
                
                    <FormInput
                        label={"Cidade"}
                        onChangeText={setCidade}
                        placeholder="Cidade"
                        value = {cidade}
                        error = {formErrors.cidade}
                    />
                
                    <FormInput
                        label={"Estado"}
                        onChangeText={setEstado}
                        placeholder="Estado"
                        value = {estado}
                        error = {formErrors.estado}
                    />
        
                    <FormInput
                        label={"Rua"}
                        onChangeText={setRua}
                        placeholder="Rua"
                        value = {rua}
                        error ={formErrors.rua}
                    />

                    <LinkButton title="Salvar" onPress={handleSubmit} disabled={!formValid}/>
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