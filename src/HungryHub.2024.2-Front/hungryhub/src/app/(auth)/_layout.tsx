import { Stack } from "expo-router";

export default function AuthLayout() {
  // layout temporário para teste
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="home"
      />
      <Stack.Screen
        name="storeDetails"
      />
    </Stack>
  )
}