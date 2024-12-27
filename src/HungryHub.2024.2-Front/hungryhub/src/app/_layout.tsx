import React from "react";
import { Slot, Stack } from "expo-router";
import AuthProvider from "../context/AuthProvider";

export default function RootLayout() {

    const Layout = () => {
        //TODO: Fazer as verificações de autenticação e redirecionamento do usuário com router.replace
        return <Slot/>
    }

    return (
        <AuthProvider>
            <Layout/>
        </AuthProvider>
    );
}