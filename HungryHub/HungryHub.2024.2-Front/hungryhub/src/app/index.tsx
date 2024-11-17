import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { loginUser } from "../api/services/user.service";
import { UserBody } from "../interfaces/user.interface";
import { router } from "expo-router";


export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        
        router.push("../(public)/login");
        /* try {
            const body: UserBody = { email, password }
            const response = await loginUser(body);
            console.log(response)
            router.push({
                pathname: "../auth/",
                params: { user: JSON.stringify(body) }
            })
        }
        catch (e) {
            console.error(e)
        } */
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    textInput: {
        borderWidth: 1,
        borderColor: "black",
        margin: 10,
    }
});