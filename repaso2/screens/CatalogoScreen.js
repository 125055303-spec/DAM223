import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Alert,
  Platform,
  StyleSheet,
} from 'react-native';

// Usa window.alert en web y Alert.alert en el teléfono
const mostrarAlerta = (mensaje) => {
  if (Platform.OS === 'web') {
    window.alert(mensaje);
  } else {
    Alert.alert('Alert', mensaje);
  }
};

export default function CatalogoScreen() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [guardando, setGuardando] = useState(false);

  const agregarLibro = () => {
    // 1. Validar que todos los campos estén llenos
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      mostrarAlerta('Todos los campos son obligatorios.');
      return;
    }

    // 2. Simular espera de 4 segundos con ActivityIndicator
    setGuardando(true);

    setTimeout(() => {
      // 3. Agregar el libro a la FlatList
      setLibros((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          titulo: titulo.trim(),
          autor: autor.trim(),
          genero: genero.trim(),
        },
      ]);

      // 4. Limpiar los TextInput
      setTitulo('');
      setAutor('');
      setGenero('');
      setGuardando(false);

      // 5. Notificar con un Alert
      mostrarAlerta('Libro guardado correctamente.');
    }, 4000);
  };

  return (
    <ImageBackground source={require('../assets/libros.jpeg')} style={styles.fondo}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Catálogo de Libros</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          placeholderTextColor="#999"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          placeholderTextColor="#999"
          value={autor}
          onChangeText={setAutor}
        />
        <TextInput
          style={styles.input}
          placeholder="Género"
          placeholderTextColor="#999"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable
          onPress={agregarLibro}
          disabled={guardando}
          style={[styles.boton, guardando && styles.botonGuardando]}
        >
          <Text style={styles.botonTexto}>
            {guardando ? 'Guardando...' : 'Agregar Libro'}
          </Text>
        </Pressable>

        {guardando && (
          <View style={styles.cargando}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.cargandoTexto}>Guardando libro...</Text>
          </View>
        )}

        <Text style={styles.total}>Total de libros: {libros.length}</Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitulo}>{item.titulo}</Text>
              <Text style={styles.cardTexto}>Autor: {item.autor}</Text>
              <Text style={styles.cardTexto}>Género: {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: { flex: 1 },
  contenedor: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 60,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  titulo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: 'center',
  },
  botonGuardando: { backgroundColor: '#999' },
  botonTexto: { color: '#fff', fontWeight: 'bold' },
  cargando: { alignItems: 'center', marginTop: 15 },
  cargandoTexto: { color: '#fff', fontWeight: 'bold', marginTop: 5 },
  total: { color: '#fff', fontWeight: 'bold', marginTop: 15, marginBottom: 10 },
  card: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  cardTitulo: { fontWeight: 'bold', fontSize: 15, marginBottom: 3 },
  cardTexto: { fontSize: 12 },
});