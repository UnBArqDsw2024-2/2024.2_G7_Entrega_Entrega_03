import React, { useEffect, useState } from "react";
import { router, Slot, Stack } from "expo-router";
import AuthProvider, { useAuth } from "../context/AuthProvider";

export default function RootLayout() {

    const Layout = () => {
        const { isSignedIn, isLoading } = useAuth();
        const [ initialCheck, setInitialCheck ] = useState(false);

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

        return <Slot/>
    }

    return (
        <AuthProvider>
            <Layout/>
        </AuthProvider>
    );
}