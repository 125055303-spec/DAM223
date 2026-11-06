import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Title, Search, Card } from '../components/components';
import { C } from '../theme';

const cursos = [
  { t: 'Inteligencia Artificial y productividad', d: 'Aprende los aspectos básicos de la IA para impulsar tu productividad diaria.', icon: 'hardware-chip-outline' },
  { t: 'Aprende sobre la programación orientada a objetos', d: 'Aprende los fundamentos de la Programación Orientada a Objetos para mejorar tus habilidades de programación y crear aplicaciones de manera estructurada.', icon: 'cube-outline' },
];
const Action = ({ icon, label }) => (
  <View style={{ alignItems: 'center', marginLeft: 16 }}>
    <Ionicons name={icon} size={22} color={C.orange} /><Text style={s.act}>{label}</Text>
  </View>
);

export default function CursosScreen() {
  return (
    <Screen>
      <Title>Gestionar Cursos</Title>
      <Search placeholder="Buscar por categoría" />
      {cursos.map((c) => (
        <Card key={c.t} style={{ padding: 0, overflow: 'hidden' }}>
          <View style={s.cover}><Ionicons name={c.icon} size={74} color={C.orangeSoft} /></View>
          <View style={{ padding: 14 }}>
            <Text style={s.name}>{c.t}</Text>
            <Text style={s.desc}>{c.d}</Text>
            <View style={s.actions}>
              <Action icon="eye" label="Ocultar" /><Action icon="warning" label="Alerta" /><Action icon="trash" label="Eliminar" />
            </View>
          </View>
        </Card>
      ))}
    </Screen>
  );
}
const s = StyleSheet.create({
  cover: { height: 130, backgroundColor: '#FFF6EA', alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 15, fontWeight: '600', color: C.text, marginBottom: 4 },
  desc: { fontSize: 13, color: '#444' },
  actions: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 },
  act: { fontSize: 10, color: C.orange, marginTop: 2 },
});