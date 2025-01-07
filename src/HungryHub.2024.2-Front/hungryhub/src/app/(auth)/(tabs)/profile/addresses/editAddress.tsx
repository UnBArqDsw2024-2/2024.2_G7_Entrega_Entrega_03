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


// Regex para validar o CEP, deve conter 8 dígitos
const cepRegex = /^[0-9]{8}$/;

// Regex para validar o estado, deve conter 2 letras
const estadoRegex = /^[A-Z]{2}$/;

// Regex para validar a cidade, deve conter apenas letras e no máximo 50 caracteres
const cidadeRegex = /^[a-zA-Z\s]{1,50}$/;

// Regex para validar a rua, deve conter letras e números, além de no máxiomo 50 caracteres
const ruaRegex = /^[a-zA-Z0-9\s]{1,50}$/;

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
                setFormErrors({ ...formErrors, cidade: "Cidade inválida. Deve conter entre 1 e 50 caracteres sendo apenas números e/ou dígitos" });
            } else {
                setFormErrors({ ...formErrors, cidade: "" });
            }
        }, [cidade]);
    
        useEffect(() => {
            if (estado && !estadoRegex.test(estado)) {
                setFormErrors({ ...formErrors, estado: "Estado inválido. Deve conter apenas dua letras maísculas" });
            } else {
                setFormErrors({ ...formErrors, estado: "" });
            }
        }, [estado]);
    
        useEffect(() => {
            if (cep && rua && cidade && estado) {
                setFormValid(true);
            } else {
                setFormValid(false);
            }
        }, [cep, rua, cidade, estado]);
    
        // Verifica se não há erros
        useEffect(() => {
            const valid = Object.values(formErrors).every((error) => error === "");
            setFormValid(valid);
        }, [formErrors]);

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
                        error ={formErrors.cep}
                    />

                    <FormInput
                        label={"Cidade"}
                        onChangeText={setCidade}
                        placeholder="Cidade"
                        value={cidade}
                        error ={formErrors.cidade}
                    />

                    <FormInput
                        label={"Estado"}
                        onChangeText={setEstado}
                        placeholder="Estado"
                        value={estado}
                        error ={formErrors.estado}
                    />

                    <FormInput
                        label={"Rua"}
                        onChangeText={setRua}
                        placeholder="Rua"
                        value={rua}
                        error ={formErrors.rua}
                    />

                    <LinkButton title="Salvar" onPress={updateAddress} disabled={!formValid} />

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