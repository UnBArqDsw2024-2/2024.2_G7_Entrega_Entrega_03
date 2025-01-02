import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import LinkButton from "../../components/LinkButton";
import { router } from "expo-router";
import { userService } from "../../api/services/user.service";
import { UserLogin } from "../../interfaces/user.interface";
import FormInput from "../../components/FormInput";
import { useAuth } from "../../context/AuthProvider";
import Toast from "react-native-toast-message";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formValid, setFormValid] = useState(false);
    const { setUser } = useAuth();

    useEffect(() => {
        if (email && password) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [email, password]);

    const handleLogin = async () => {
        try {
            const body: UserLogin = { email, password };
            const response = await userService.loginUser(body);
            const user = { id: response.user_id };
            setUser(user);
            router.push("../(auth)/")
        } catch (e) {
            console.error(e);
            Toast.show({
                type: "error",
                text1: "Erro ao fazer login",
                text2: "Verifique suas credenciais e tente novamente",
            });
        }
    }

    const navigateRegister = () => {
        router.push("register");
    }

    //TODO: Implementar feedback de erro (Toast Message)

    return (
        <View style={styles.container}>

            <Text style={styles.title}> Login </Text>

            <View style={styles.loginContainer}>

                <FormInput 
                    label=""
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />

                <FormInput 
                    label=""
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                />

                <LinkButton title="Entrar" onPress={handleLogin} disabled={!formValid} />
            </View>

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
        width: '100%',
    },
    loginContainer: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginInput: {
        width: '100%',
        marginBottom: 10,
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