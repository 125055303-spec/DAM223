
import React, { useState } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import InicioAdminScreen from './screens/InicioAdminScreen';
import CursosScreen from './screens/CursosScreen';
import UsuariosScreen from './screens/UsuariosScreen';
import ReportesScreen from './screens/ReportesScreen';
import SolicitudesScreen from './screens/SolicitudesScreen';
import GraficasScreen from './screens/GraficasScreen';
import MenuScreen from './screens/MenuScreen';
import MiPerfilScreen from './screens/MiPerfilScreen';

export default function App() {

  const [pantalla, setPantalla] = useState('Login');

  const { width } = useWindowDimensions();

  let contenido;

  if (pantalla === 'Login') {
    contenido = <LoginScreen cambiarPantalla={setPantalla} />;
  }

  if (pantalla === 'Inicio') {
    contenido = <InicioAdminScreen cambiarPantalla={setPantalla} />;
  }

  if (pantalla === 'Cursos') {
    contenido = <CursosScreen cambiarPantalla={setPantalla} />;
  }

  if (pantalla === 'Usuarios') {
    contenido = <UsuariosScreen cambiarPantalla={setPantalla} />;
  }

  if (pantalla === 'Reportes') {
    contenido = <ReportesScreen cambiarPantalla={setPantalla} />;
  }

  if (pantalla === 'Solicitudes') {
    contenido = <SolicitudesScreen cambiarPantalla={setPantalla} />;
  }

  if (pantalla === 'Graficas') {
    contenido = <GraficasScreen cambiarPantalla={setPantalla} />;
  }

  if (pantalla === 'Menu') {
    contenido = <MenuScreen cambiarPantalla={setPantalla} />;
  }

  if (pantalla === 'MiPerfil') {
    contenido = <MiPerfilScreen cambiarPantalla={setPantalla} />;
  }

  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#2B2B2B',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      {width > 760 && (
        <View style={{ width: 200 }}>

          <Text style={{
            color: '#FFB066',
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 14
          }}>
            Banco de Tiempo
          </Text>

          <Text onPress={() => setPantalla('Login')}
            style={{ color: 'white', padding: 8 }}>
            Login
          </Text>

          <Text onPress={() => setPantalla('Inicio')}
            style={{ color: 'white', padding: 8 }}>
            Inicio
          </Text>

          <Text onPress={() => setPantalla('Cursos')}
            style={{ color: 'white', padding: 8 }}>
            Gestionar cursos
          </Text>

          <Text onPress={() => setPantalla('Usuarios')}
            style={{ color: 'white', padding: 8 }}>
            Gestionar usuarios
          </Text>

          <Text onPress={() => setPantalla('Reportes')}
            style={{ color: 'white', padding: 8 }}>
            Reportes
          </Text>

          <Text onPress={() => setPantalla('Solicitudes')}
            style={{ color: 'white', padding: 8 }}>
            Solicitudes
          </Text>

          <Text onPress={() => setPantalla('Graficas')}
            style={{ color: 'white', padding: 8 }}>
            Gráficas
          </Text>

          <Text onPress={() => setPantalla('Menu')}
            style={{ color: 'white', padding: 8 }}>
            Menú lateral
          </Text>

          <Text onPress={() => setPantalla('MiPerfil')}
            style={{ color: 'white', padding: 8 }}>
            Mi perfil
          </Text>

        </View>
      )}

      <View style={{
        width: 390,
        height: 800,
        maxHeight: '96%',
        borderRadius: 30,
        borderWidth: 6,
        borderColor: '#111'
      }}>

        {contenido}

      </View>

    </View>
  );
}
