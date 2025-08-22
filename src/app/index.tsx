import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App de Productos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
});
