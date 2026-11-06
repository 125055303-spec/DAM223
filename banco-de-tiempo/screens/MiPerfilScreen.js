import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Title } from '../components/components';
import { C } from '../theme';

const Btn = ({ children, flex }) => (
  <View style={[s.btn, flex && { flex }]}><Text style={s.btnTxt}>{children}</Text></View>
);

export default function MiPerfilScreen() {
  return (
    <Screen>
      <Title sub="Administra tu información y consulta tu actividad.">Mi perfil</Title>
      <View style={{ alignItems: 'center', marginVertical: 12 }}>
        <Ionicons name="person-circle-outline" size={190} color={C.orange} />
        <Text style={s.edit}>Editar foto de perfil</Text>
      </View>
      <View style={s.row}><Btn flex={3}>Cambiar contraseña</Btn><Btn flex={2}>Rol</Btn></View>
      <View style={s.row}><Btn flex={1}>Configuración de seguridad</Btn></View>
      <View style={s.row}><Btn flex={2}>Acceso</Btn><Btn flex={3}>Cambiar usuario</Btn></View>
    </Screen>
  );
}
const s = StyleSheet.create({
  edit: { fontSize: 15, fontWeight: '600', color: C.text, marginTop: 4 },
  row: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  btn: { borderWidth: 1, borderColor: C.border, borderRadius: 14, paddingVertical: 14, paddingHorizontal: 12 },
  btnTxt: { color: C.orangeSoft, fontSize: 15 },
});