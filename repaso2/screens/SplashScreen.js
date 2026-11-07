import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.contenedor}>
      <Image source={require('../assets/leyendo.webp')} style={styles.imagen} />
      <Text style={styles.texto}>repa2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: { width: 150, height: 150, resizeMode: 'contain' },
  texto: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
});