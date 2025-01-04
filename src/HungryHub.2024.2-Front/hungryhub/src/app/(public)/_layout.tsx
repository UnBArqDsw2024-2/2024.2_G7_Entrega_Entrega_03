import { Stack } from "expo-router";
import React from "react";

export default function PublicLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="login"
            />
            <Stack.Screen
                name="register"
                options={{
                    headerTitle: "", 
                    headerShown: true,
                    headerTransparent: true,
                }}
            />
            <Stack.Screen
                name="storeDetails"
            />
        </Stack>
    );
}