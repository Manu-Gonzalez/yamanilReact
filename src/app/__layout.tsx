import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function Root() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Inicio" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="profile" options={{ title: "Perfil" }} />
    </Stack>
  );
}
