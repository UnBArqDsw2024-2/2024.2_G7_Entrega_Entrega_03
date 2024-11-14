import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { loginUser } from "../api/services/user.service";
import { UserBody } from "../interfaces/user.interface";
import { router } from "expo-router";


export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        try {
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
        }
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                style={{ borderWidth: 1, borderColor: "#000", margin: 10 }}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                style={styles.textInput}
            />

            <Button title="Submit" onPress={handleLogin} />
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