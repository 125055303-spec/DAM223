import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Title, Chips, Card } from '../components/components';
import { C } from '../theme';

const DATA = {
  Cursos: { icon: 'desktop-outline', items: [
    { t: 'Solicitud para subir un curso', tipo: 'Publicación de curso', u: 'Ashley López', f: '02/10/2026', d: 'Quiero solicitar la publicación de mi curso en la plataforma. Ya agregué la información, descripción, contenido y material correspondiente, por lo que solicito que sea revisado y aprobado.' },
    { t: 'Solicitud para editar un curso', tipo: 'Modificación de curso', d: 'Solicito permiso para realizar cambios en la información y contenido de mi curso, ya que necesito actualizar algunos datos antes de continuar ofreciéndolo a los usuarios.' } ] },
  Cuentas: { icon: 'id-card-outline', items: [
    { t: 'Apelación por bloqueo injustificado', tipo: 'Apelación de bloqueo', d: 'Mi cuenta fue bloqueada y considero que se trató de un error, ya que no realicé ninguna actividad que incumpliera las normas de la plataforma. Solicito que mi caso sea revisado y se reconsidere el bloqueo.' },
    { t: 'Solicitud para recuperar una cuenta', tipo: 'Recuperación de cuenta', d: 'No puedo acceder a mi cuenta y necesito recuperar el acceso. Solicito que se revise mi información y se me permita volver a utilizar mi cuenta.' } ] },
  Créditos: { icon: 'card-outline', items: [
    { t: 'Solicitud por créditos no recibidos', tipo: 'Problema con créditos', d: 'Completé las horas correspondientes, pero los créditos obtenidos no aparecen en mi cuenta. Solicito que se revise mi registro y se actualice mi saldo de créditos.' },
    { t: 'Solicitud para corregir créditos', tipo: 'Corrección de créditos', d: 'Mi saldo de créditos parece ser incorrecto. Solicito que revisen las horas que he realizado y corrijan el total correspondiente.' } ] },
  Otras: { icon: 'apps', items: [
    { t: 'Solicitud para cambiar información de perfil', tipo: 'Modificación de perfil', d: 'Solicito realizar un cambio en la información de mi perfil, ya que algunos datos actualmente registrados son incorrectos o necesitan actualizarse.' },
    { t: 'Solicitud de revisión de una sanción', tipo: 'Apelación de sanción', d: 'Recibí una sanción en mi cuenta y considero que debería revisarse mi caso, ya que considero que la medida aplicada no corresponde con la situación. Solicito una revisión por parte de administración.' } ] },
};

// tab: 'Cursos' | 'Cuentas' | 'Créditos' | 'Otras'
export default function SolicitudesScreen({ tab = 'Cursos' }) {
  const { icon, items } = DATA[tab];
  return (
    <Screen>
      <Title>Solicitudes</Title>
      <Chips items={['Cursos', 'Cuentas', 'Créditos', 'Otras']} active={tab} />
      {items.map((it) => (
        <Card key={it.t}>
          <View style={s.badge}><Ionicons name={icon} size={26} color={C.white} /></View>
          <Text style={[s.t, { width: '75%' }]}>{it.t}</Text>
          {it.u && <Text style={s.l}>Usuario: {it.u}</Text>}
          {it.f && <Text style={s.l}>Fecha: {it.f}</Text>}
          <Text style={s.l}>Tipo: {it.tipo}</Text>
          <Text style={s.l}>Descripción:</Text>
          <View style={s.quote}><Text style={s.q}>{it.d}</Text></View>
        </Card>
      ))}
    </Screen>
  );
}
const s = StyleSheet.create({
  badge: { position: 'absolute', top: 14, right: 14, width: 46, height: 46, borderRadius: 14, backgroundColor: C.orange, alignItems: 'center', justifyContent: 'center' },
  t: { fontSize: 13, color: C.text, fontWeight: '600', marginBottom: 2 },
  l: { fontSize: 13, color: C.text },
  quote: { borderLeftWidth: 2, borderLeftColor: '#CFCFCF', paddingLeft: 10, marginTop: 4 },
  q: { fontSize: 13, color: '#333' },
});