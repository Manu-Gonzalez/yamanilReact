import { SafeAreaView, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl font-bold text-blue-600">
          Bienvenido 
        </Text>

        <Link href="/login" asChild>
          <Pressable className="mt-6 bg-blue-500 px-6 py-3 rounded-2xl shadow">
            <Text className="text-white text-lg font-medium">Ir al Login</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}
