import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import InicioAdminScreen from './screens/InicioAdminScreen';
import MenuScreen from './screens/MenuScreen';
import CursosScreen from './screens/CursosScreen';
import UsuariosScreen from './screens/UsuariosScreen';
import SolicitudesScreen from './screens/SolicitudesScreen';
import GraficasScreen from './screens/GraficasScreen';
import MiPerfilScreen from './screens/MiPerfilScreen';

const pantallas = [
  ['Login', <LoginScreen />],
  ['Inicio (Administrador)', <InicioAdminScreen />],
  ['Menú lateral', <MenuScreen />],
  ['Gestionar Cursos', <CursosScreen />],
  ['Gestionar Usuarios', <UsuariosScreen />],
  ['Solicitudes - Cursos', <SolicitudesScreen tab="Cursos" />],
  ['Solicitudes - Cuentas', <SolicitudesScreen tab="Cuentas" />],
  ['Solicitudes - Créditos', <SolicitudesScreen tab="Créditos" />],
  ['Solicitudes - Otras', <SolicitudesScreen tab="Otras" />],
  ['Gráficas', <GraficasScreen />],
  ['Mi perfil', <MiPerfilScreen />],
];

export default function App() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#2B2B2B' }}
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      {pantallas.map(([nombre, pantalla]) => (
        <View key={nombre} style={{ margin: 16, alignItems: 'center' }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: '600',
              marginBottom: 10,
            }}
          >
            {nombre}
          </Text>
          <View
            style={{
              width: 360,
              height: 720,
              borderRadius: 36,
              borderWidth: 8,
              borderColor: '#111111',
              overflow: 'hidden',
            }}
          >
            {pantalla}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}