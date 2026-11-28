import React, { useState, useEffect } from 'react';
import { SafeAreaView,View,Text, TextInput, Pressable, StyleSheet,} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { obtenerUsuarioPorId, actualizarUsuario } from '../services/usuariosService';

export default function ActualizarUsuarioScreen() {

  const { id } = useLocalSearchParams();
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [error, setError] = useState('');

  // Carga los datos actuales del usuario desde LocalStorage
  useEffect(() => {
    const cargar = async () => {
      const usuario = await obtenerUsuarioPorId(id);
      if (usuario) {
        setNombre(usuario.nombre);
        setEdad(String(usuario.edad));
      } else {
        setError('Usuario no encontrado');
      }
    };
    cargar();
  }, [id]);

  const guardarCambios = async () => {
    setError('');
    try {
      await actualizarUsuario(id, { nombre, edad });
      router.back();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Actualizar Usuario
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Nombre
        </Text>

        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombre"
        />

        <Text style={styles.label}>
          Edad
        </Text>

        <TextInput
          style={styles.input}
          value={edad}
          onChangeText={setEdad}
          placeholder="Edad"
          keyboardType="numeric"
        />

        {error !== '' && <Text style={styles.error}>{error}</Text>}

        <Pressable
          style={styles.boton}
          onPress={guardarCambios}
        >
          <Text style={styles.textoBoton}>
            Guardar cambios
          </Text>
        </Pressable>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    elevation: 5,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },

  error: {
    color: '#DC2626',
    marginBottom: 10,
    textAlign: 'center',
  },

  boton: {
    backgroundColor: '#FACC15',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: 'bold',
  },

});