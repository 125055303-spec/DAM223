import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../components/components';
import { C } from '../theme';

const items = [['INICIO', 'home-outline'], ['CURSOS', 'ribbon'], ['USUARIOS', 'people'], ['REPORTES', 'newspaper'], ['SOLICITUDES', 'mail'], ['GRÁFICAS', 'stats-chart']];

export default function MenuScreen() {
  return (
    <Screen header={false} scroll={false}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={s.drawer}>
          {items.map(([l, i]) => (
            <View key={l} style={s.item}>
              <View style={s.ico}><Ionicons name={i} size={22} color={C.orange} /></View>
              <Text style={s.lbl}>{l}</Text>
            </View>
          ))}
          <View style={{ flex: 1 }} />
          <View style={s.item}>
            <View style={s.ico}><Ionicons name="log-out" size={26} color={C.orange} /></View>
            <Text style={s.lbl}>CERRAR SESIÓN</Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', padding: 14 }}>
          <Ionicons name="person-circle-outline" size={52} color={C.orange} />
        </View>
      </View>
    </Screen>
  );
}
const s = StyleSheet.create({
  drawer: { width: '58%', backgroundColor: C.orange, borderTopRightRadius: 26, borderBottomRightRadius: 26, padding: 8, marginVertical: 8 },
  item: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FF6F00', borderRadius: 16, padding: 8, marginBottom: 8 },
  ico: { width: 36, height: 36, borderRadius: 18, backgroundColor: C.white, alignItems: 'center', justifyContent: 'center' },
  lbl: { color: C.white, fontWeight: '700', fontSize: 14, marginLeft: 10 },
});