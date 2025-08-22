import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useProductById } from "../../hooks/useProductById";
import { ProductByCategory } from "../../types/Product";
export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const { data: product, isLoading, isError, error } = useProductById(id);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>{error.message}</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Producto no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={styles.title}>{product.nombre}</Text>
      <Text style={styles.price}>Precio: ${product.precio_unidad}</Text>
      <Text style={styles.detail}>{product.categoria.nombre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  price: { fontSize: 18, color: "#007AFF", marginBottom: 10 },
  detail: { fontSize: 16, color: "#333" },
});
