import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Screen, BarChart } from '../components/components';
import { C } from '../theme';

export default function InicioAdminScreen() {
  return (
    <Screen>
      <Text style={s.hello}>¡Bienvenido Administrador!</Text>
      <Text style={s.h2}>Cursos MEJOR valorados</Text>
      <BarChart max={5} data={[['Diseño UX/UI', 4.9], ['Python', 4.7], ['Programación Web', 4.6], ['Bases de Datos', 4.5], ['Java', 4.4]]} />
      <Text style={s.h2}>Cursos PEOR valorados</Text>
      <BarChart max={5} data={[['Intro. a C++', 2.7], ['Matemáticas', 2.9], ['Redes Inform.', 3.1], ['Fundamentos', 3.3], ['Ofimática', 3.5]]} />
    </Screen>
  );
}
const s = StyleSheet.create({
  hello: { fontSize: 30, color: C.orange, fontWeight: '500', marginBottom: 26 },
  h2: { fontSize: 18, fontWeight: '600', color: C.text, marginBottom: 10 },
});