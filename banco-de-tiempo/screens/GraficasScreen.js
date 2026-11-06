import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Screen, Title, BarChart, LineChart } from '../components/components';
import { C } from '../theme';

export default function GraficasScreen() {
  return (
    <Screen>
      <Title>Gráficas</Title>
      <Text style={s.h}>Cursos más populares</Text>
      <Text style={s.p}>Cantidad de usuarios inscritos en cada curso</Text>
      <BarChart max={140} data={[['Programación/Web', 125], ['Diseño UX/UI', 95], ['Python', 85], ['Bases de Datos', 75], ['Java', 55]]} />
      <Text style={s.h}>Usuarios activos por mes</Text>
      <Text style={s.p}>Cantidad de usuarios que realizaron alguna actividad en la plataforma durante cada mes.</Text>
      <LineChart values={[140, 165, 190, 215, 240]} labels={['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre']} />
    </Screen>
  );
}
const s = StyleSheet.create({
  h: { fontSize: 20, fontWeight: '600', color: C.text },
  p: { fontSize: 13, color: C.text, marginBottom: 10 },
});