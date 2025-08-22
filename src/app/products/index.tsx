import { View, Text, FlatList, Pressable, TextInput, Button } from "react-native";
import { Link } from "expo-router";
import { useProducts } from "../../hooks/useProducts";
import { useDebounce } from "use-debounce";
import { useState } from "react";

export default function Products() {
  const { data: products, isLoading, isError, error } = useProducts();

  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 300);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "gray" }}>Cargando productos...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>{error.message}</Text>
      </View>
    );
  }

  const filteredProducts =
    products?.filter((p) =>
      p.nombre.toLowerCase().includes(debouncedSearch.toLowerCase())
    ) || [];

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Buscar producto..."
        value={search}
        onChangeText={setSearch}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 8,
          marginBottom: 15,
        }}
      />

      <FlatList
        data={paginatedProducts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Link href={`/products/${item.id}`} asChild>
            <Pressable style={{ padding: 12, borderBottomWidth: 1, borderColor: "#eee" }}>
              <Text style={{ fontSize: 16 }}>{item.nombre}</Text>
              <Text style={{ color: "gray" }}>${item.precio_unidad}</Text>
              <Text style={{ color: "green" }}>{item.categoria.nombre}</Text>
            </Pressable>
          </Link>
        )}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Button
          title="Anterior"
          onPress={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        />
        <Text style={{ alignSelf: "center" }}>
          Página {currentPage} de {totalPages}
        </Text>
        <Button
          title="Siguiente"
          onPress={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages} 
        />
      </View>
    </View>
  );
}
