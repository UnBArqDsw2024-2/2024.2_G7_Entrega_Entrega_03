import React, { useEffect, useState } from "react";
import { router, Slot, Stack } from "expo-router";
import AuthProvider, { useAuth } from "../context/AuthProvider";
import LoadingScreen from "../components/LoadingScreen";
import Toast from "react-native-toast-message";
import toastConfig from "../utils/toastConfig";

export default function RootLayout() {

    const Layout = () => {
        const { isSignedIn, isLoading } = useAuth();
        const [initialCheck, setInitialCheck] = useState(false);

        useEffect(() => {
            if (!isLoading) {
                if (isSignedIn) {
                    router.replace("../(auth)/");
                } else {
                    router.replace("../(public)/login");
                }
            }
            setInitialCheck(true);
        }, [isSignedIn, isLoading]);

        if (isLoading && !initialCheck) {
            return <LoadingScreen />;
        }

        return <Slot />
    }

    return (
        <>
            <AuthProvider>
                <Layout />
            </AuthProvider>
            <Toast config={toastConfig}/>
        </>
    );
}