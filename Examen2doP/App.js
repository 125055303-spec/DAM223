import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Platform,
  FlatList,
  Pressable,
} from "react-native";

import { useState } from "react";

const showAlert = (title, message) => {
  if (Platform.OS === "web") {
    alert(title + "\n" + message);
  } else {
    Alert.alert(title, message);
  }
};

const cafes = [
  {
    id: "1",
    name: "Café americano",
    description: "Café filtrado con agua caliente, sin leche ni azúcar.",
    precio: 45,
  },
  {
    id: "2",
    name: "hamburguesa",
    description: "Hamburguesa con carne molida, lechuga, tomate y queso.",
    precio: 120,
  },
  {
    id: "3",
    name: "Sándwich de pollo",
    description:
      "Sándwich de pollo a la parrilla con lechuga, tomate y mayonesa.",
    precio: 90,
  },
];

export default function App() {
  const [productos, setProd] = useState(0.0);
  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>Cafeteria Antojos</Text>
      <View style={styles.header}>
        <Text style={styles.title}>EncabezadoAplicacion</Text>
        <Text style={styles.subtitle}>Bienvenido a nuestra cafetería</Text>
      </View>
      <FlatList
        data={cafes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrice}>Precio: ${item.precio}</Text>
            <Pressable>
              <Text
                style={styles.itemButton}
                onPress={() => {
                  showAlert(
                    `Producto: ${item.name}`,
                    `Descripción: ${item.description} \n Precio: $${item.precio}`,
                  );
                  setProd(productos + item.precio);
                }}
              >
                añadir al carrito
              </Text>
            </Pressable>
          </View>
        )}
      />
      <Text style={styles.itemPrice}>Total: ${productos}</Text >``
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleApp: {
    textAlign: "start",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  item: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    width: "90%",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemButton: {
    backgroundColor: "#007BFF",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    textAlign: "center",
  },

});
