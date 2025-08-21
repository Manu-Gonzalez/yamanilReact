import { View, Text, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-xl font-semibold mb-4">Iniciar Sesión</Text>
      
      <TextInput 
        placeholder="Email"
        className="w-full border border-gray-300 rounded-xl p-2 mb-3"
      />
      <TextInput 
        placeholder="Contraseña"
        secureTextEntry
        className="w-full border border-gray-300 rounded-xl p-2 mb-3"
      />

      <Pressable className="bg-blue-600 px-4 py-2 rounded-xl">
        <Text className="text-white">Entrar</Text>
      </Pressable>

      <Link href="/" asChild>
        <Pressable className="mt-4">
          <Text className="text-blue-500">Volver al inicio</Text>
        </Pressable>
      </Link>
    </View>
  );
}
