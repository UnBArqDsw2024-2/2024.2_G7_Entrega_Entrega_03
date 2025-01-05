import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="playground"
                options={{
                    headerShown: true,
                    headerTitle: "Playground",
                    presentation: "modal"
                }}
            />
        </Stack>
    )
}