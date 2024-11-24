import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import Input from "../../components/Input";
import LinkButton from "../../components/LinkButton";
import { router } from "expo-router";
import { loginUser } from "../../api/services/user.service";
import { UserBody } from "../../interfaces/user.interface";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const body: UserBody = { email, password };
      const response = await loginUser(body);
      console.log(response);
      router.push({
        pathname: "../(auth)/",
        params: { user: JSON.stringify(body) },
      });
    } catch (e) {
      console.error(e);
    }
    }

    const navigateRegister = () => {
        router.push("register");
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}> Login </Text>

            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />

            <LinkButton title="Entrar" onPress={handleLogin}/>

            <Pressable onPress={navigateRegister}>
                <Text style={styles.text}>Cadastrar conta</Text>
            </Pressable>

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
    text: {
        color: '#EB001B',
        textDecorationLine: 'underline',
    }
});