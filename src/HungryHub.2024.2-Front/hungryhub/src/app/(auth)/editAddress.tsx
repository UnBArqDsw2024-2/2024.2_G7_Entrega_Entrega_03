import { useState } from "react";
import { AddressInterface } from "../../interfaces/address.interface";
import {View, StyleSheet,Text, TextInput } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import AddressInput from "../../components/addressInput";
import LinkButton from "../../components/LinkButton";
interface AddressProps extends AddressInterface{

}

export default function EditAddress()
{
    const address = useLocalSearchParams() as unknown as AddressProps ;

    const [cep, setCep] = useState<string |undefined| null> (address.cep);
    const [rua, setRua] = useState<string |undefined| null> (address.rua);
    const [cidade, setCidade] = useState<string |undefined| null> (address.cidade);
    const [estado, setEstado] = useState<string |undefined| null> (address.estado);

  
    
    return(
        <View>
        
            <Text style = {styles.titulo}>Editar Endereço</Text>
            
            <View style = {styles.view}>

                <label style={styles.textInput}>CEP</label>
                <AddressInput
                    onChangeText={setCep}
                    placeholder="CEP"
                    value = {cep}

                />
            
                <label style={styles.textInput}>Cidade</label>
                <AddressInput
                    onChangeText={setCidade}
                    placeholder="Cidade"
                    value = {cidade}

                />
            
                <label style={styles.textInput}>Estado</label>
                <AddressInput
                    onChangeText={setEstado}
                    placeholder="Estado"
                    value = {estado}

                />
    
                <label style={styles.textInput}>Rua</label>
                <AddressInput
                    onChangeText={setRua}
                    placeholder="Rua"
                    value = {rua}

                />
            </View>
            
            <LinkButton title="Salvar"/>

        </View>

    )
}

const styles = StyleSheet.create({
    view:{
        justifyContent: "flex-start",
        alignItems : "center"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#161616",
        marginTop: 30,
        width: "60%",
        borderRadius: 10,
    },

    titulo: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
    }
});