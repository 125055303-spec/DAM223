import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, OrangeButton } from '../components/components';
import { C } from '../theme';

export default function LoginScreen() {
  return (
    <Screen header={false}>
      <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 50 }}>
        <Ionicons name="person-circle-outline" size={170} color={C.orange} />
      </View>
      <TextInput style={s.input} placeholder="Nombre de Usuario" placeholderTextColor={C.orange} editable={false} />
      <TextInput style={s.input} placeholder="Contraseña" placeholderTextColor={C.orange} secureTextEntry editable={false} />
      <View style={s.row}>
        <Ionicons name="checkbox" size={28} color={C.orange} />
        <Text style={s.remember}>Recuérdame</Text>
      </View>
      <OrangeButton label="Regístrate" />
      <Text style={s.forgot}>¿Olvidaste tu contraseña?</Text>
    </Screen>
  );
}
const s = StyleSheet.create({
  input: { borderBottomWidth: 1, borderBottomColor: C.border, color: C.orange, fontSize: 16, paddingVertical: 12, marginBottom: 14 },
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 14 },
  remember: { color: C.orange, fontSize: 16, marginLeft: 8 },
  forgot: { color: C.orange, textAlign: 'center', marginTop: 18, fontSize: 15 },
});