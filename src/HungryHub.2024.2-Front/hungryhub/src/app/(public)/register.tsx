import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../components/Input";
import LinkButton from "../../components/LinkButton";

export default function Register() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>

            <Input placeholder="Nome do usuário" />
            <Input placeholder="CPF" />
            <Input placeholder="E-mail" />
            <Input placeholder="Telefone" />
            <Input placeholder="Senha" />
            <Input placeholder="Confirmar senha" />
            <Input placeholder="CEP" />

            <LinkButton title="Criar Conta" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#EB001B',
        marginBottom: 20,
    },
});