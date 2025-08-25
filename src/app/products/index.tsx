import { View,  Text, FlatList, Pressable, TextInput, Button, Modal, StyleSheet } from "react-native";
import { useProducts } from "../../hooks/useProducts";
import { useDebounce } from "use-debounce";
import { useState } from "react";
import { ProductByCategory } from "../../types/Product";
import RNPickerSelect from 'react-native-picker-select';
export default function Products() {
  const { data: products, isLoading, isError, error } = useProducts();
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductByCategory | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (product: ProductByCategory) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 300);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  if (isLoading) {
    return (
      <View>
        <Text style={{ color: "gray" }}>Cargando productos...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text style={{ color: "red" }}>{(error as Error).message}</Text>
      </View>
    );
  }

  const filteredProducts: ProductByCategory[] =
    products?.filter((p: ProductByCategory) =>
      p.nombre.toLowerCase().includes(debouncedSearch.toLowerCase())
    ) || [];

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const options = [
    { label: 'cafeteria', value: 'cafeteria' },
    { label: 'lacteos', value: 'lacteos' },
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Buscar producto..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />
      <RNPickerSelect
        onValueChange={(value) => setSelectedValue(value)}
        items={options}
        placeholder={{ label: 'Select an option...', value: null }}
      />
      <FlatList
        data={paginatedProducts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(item)}
            style={styles.item}
          >
            <Text style={styles.itemTitle}>{item.nombre}</Text>
            <Text style={styles.itemPrice}>${item.precio_unidad}</Text>
            <Text style={styles.itemCategory}>{item.categoria.nombre}</Text>
          </Pressable>
        )}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {selectedProduct && (
              <>
                <Text style={styles.modalTitle}>{selectedProduct.nombre}</Text>
                <Text style={styles.modalPrice}>
                  Precio: ${selectedProduct.precio_unidad}
                </Text>
                <Text style={styles.modalCategory}>
                  Categoría: {selectedProduct.categoria.nombre}
                </Text>
                <Button title="Cerrar" onPress={closeModal} />
              </>
            )}
          </View>
        </View>
      </Modal>

      <View style={styles.pagination}>
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

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  itemTitle: { fontSize: 16, fontWeight: "bold" },
  itemPrice: { color: "gray" },
  itemCategory: { color: "green" },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  modalPrice: { fontSize: 16, marginBottom: 5 },
  modalCategory: { fontSize: 16, marginBottom: 20 },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
