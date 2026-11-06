import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Title, Search, Chips, Card, Stars } from '../components/components';
import { C } from '../theme';

const users = [
  { n: 'Ashley López', mail: 'ashley.mich@gmail.com', tipo: 'Regular', ins: 5, cur: 2, cred: 200, f: '02/10/2021', st: 4, bg: '#FFE0B5' },
  { n: 'Valeria Hernández', mail: 'vale.hern@gmail.com', tipo: 'Maestro', ins: 10, cur: 15, cred: 450, f: '02/10/2019', st: 4, bg: '#FFC9D0' },
  { n: 'Daniel Matínez', mail: 'danilbar2003@gmail.com', tipo: 'Nuevo', ins: 3, cur: 1, cred: 50, f: '02/10/2026', st: 2, bg: '#D9D9D9' },
];
const Row = ({ icon, text }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
    <Ionicons name={icon} size={14} color={C.orange} /><Text style={s.row}>{text}</Text>
  </View>
);

export default function UsuariosScreen() {
  return (
    <Screen>
      <Title>Gestionar Usuarios</Title>
      <Search placeholder="Buscar por nombre de usuario" />
      <Chips items={['Maestro', 'Regular', 'Nuevo']} />
      {users.map((u) => (
        <Card key={u.n} style={{ padding: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
            <Ionicons name="mail" size={16} color={C.orange} /><Text style={s.mail}>{u.mail}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', width: 96 }}>
              <View style={[s.avatar, { backgroundColor: u.bg }]}><Ionicons name="person" size={44} color="#3A3A3A" /></View>
              <Text style={s.name}>{u.n}</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <View style={{ alignSelf: 'flex-end', marginBottom: 6 }}><Stars n={u.st} /></View>
              <Row icon="information-circle" text={`Usuario ${u.tipo}`} />
              <Row icon="school" text={`Inscripciones : ${u.ins}`} />
              <Row icon="library" text={`Cursos creados : ${u.cur}`} />
              <Row icon="wallet" text={`Créditos : ${u.cred}`} />
              <Row icon="ellipse" text="Estado : Activo" />
              <Row icon="calendar" text={`Fecha de registro : ${u.f}`} />
            </View>
          </View>
        </Card>
      ))}
    </Screen>
  );
}
const s = StyleSheet.create({
  mail: { fontSize: 10, marginLeft: 6, color: C.text },
  avatar: { width: 78, height: 78, borderRadius: 39, alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 12, marginTop: 4, color: C.text, textAlign: 'center' },
  row: { fontSize: 12, marginLeft: 6, color: C.text },
});