
import React, { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  useWindowDimensions
} from 'react-native';

// PANTALLAS
import LoginScreen from './screens/LoginScreen';
import InicioAdminScreen from './screens/InicioAdminScreen';
import CursosScreen from './screens/CursosScreen';
import UsuariosScreen, {
  USUARIOS_INICIALES
} from './screens/UsuariosScreen';
import ReportesScreen from './screens/ReportesScreen';
import SolicitudesScreen from './screens/SolicitudesScreen';
import GestionInfoScreen from './screens/GestionInfoScreen';
import MiPerfilScreen from './screens/MiPerfilScreen';
import UsuarioDetalleScreen from './screens/UsuarioDetalleScreen';

export default function App() {

  const [pantalla, setPantalla] = useState('Login');

  // LISTA DE USUARIOS
  const [usuarios, setUsuarios] = useState(USUARIOS_INICIALES);

  // USUARIO SELECCIONADO
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const { width } = useWindowDimensions();

  const computadora = width > 760;

  // ABRIR PERFIL
  const abrirUsuario = (usuario) => {
    setUsuarioSeleccionado(usuario);
    setPantalla('UsuarioDetalle');
  };

  // REGRESAR A LA LISTA
  const volverUsuarios = () => {
    setUsuarioSeleccionado(null);
    setPantalla('Usuarios');
  };

  let contenido;

  // CAMBIAR ENTRE PANTALLAS
  if (pantalla === 'Login') {
    contenido = (
      <LoginScreen cambiarPantalla={setPantalla} />
    );
  }
  else if (pantalla === 'Inicio') {
    contenido = (
      <InicioAdminScreen cambiarPantalla={setPantalla} />
    );
  }
  else if (pantalla === 'Cursos') {
    contenido = (
      <CursosScreen cambiarPantalla={setPantalla} />
    );
  }
  else if (pantalla === 'Usuarios') {
    contenido = (
      <UsuariosScreen
        cambiarPantalla={setPantalla}
        usuarios={usuarios}
        setUsuarios={setUsuarios}
        abrirUsuario={abrirUsuario}
      />
    );
  }
  else if (pantalla === 'UsuarioDetalle') {
    contenido = (
      <UsuarioDetalleScreen
        usuario={usuarioSeleccionado}
        volver={volverUsuarios}
        setUsuarios={setUsuarios}
      />
    );
  }
  else if (pantalla === 'Reportes') {
    contenido = (
      <ReportesScreen cambiarPantalla={setPantalla} />
    );
  }
  else if (pantalla === 'Solicitudes') {
    contenido = (
      <SolicitudesScreen cambiarPantalla={setPantalla} />
    );
  }
  else if (pantalla === 'GestionInfo') {
    contenido = (
      <GestionInfoScreen cambiarPantalla={setPantalla} />
    );
  }
  else if (pantalla === 'MiPerfil') {
    contenido = (
      <MiPerfilScreen cambiarPantalla={setPantalla} />
    );
  }
  else {
    contenido = (
      <Text>Pantalla no encontrada</Text>
    );
  }

  // OPCIONES DEL MENU LATERAL
  const opciones = [
    { nombre: 'Login', pantalla: 'Login' },
    { nombre: 'Inicio', pantalla: 'Inicio' },
    { nombre: 'Cursos', pantalla: 'Cursos' },
    { nombre: 'Usuarios', pantalla: 'Usuarios' },
    { nombre: 'Reportes', pantalla: 'Reportes' },
    { nombre: 'Solicitudes', pantalla: 'Solicitudes' },
    { nombre: 'Gestión de información', pantalla: 'GestionInfo' },
    { nombre: 'Mi perfil', pantalla: 'MiPerfil' }
  ];

  return (

    <View style={{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#FFF7EF'
    }}>

      {/* MENU LATERAL */}

      <ScrollView
        style={{
          width: computadora ? 220 : 105,
          flexGrow: 0,
          backgroundColor: '#FF7900'
        }}
      >

        <Text style={{
          color: 'white',
          fontSize: computadora ? 21 : 13,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 25,
          marginBottom: 25
        }}>
          Banco de Tiempo
        </Text>

        {opciones.map((opcion, index) => (

          <Text
            key={index}
            onPress={() => setPantalla(opcion.pantalla)}
            style={{
              backgroundColor:
                pantalla === opcion.pantalla
                  ? '#FFAA55'
                  : '#FF6800',

              color: 'white',
              fontSize: computadora ? 15 : 11,
              fontWeight: 'bold',
              padding: computadora ? 15 : 10,
              marginHorizontal: 7,
              marginVertical: 4,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#E95B00',
              textAlign: 'left'
            }}
          >
            {opcion.nombre}
          </Text>

        ))}

      </ScrollView>

      {/* CONTENIDO */}

      <View style={{
        flex: 1,
        minWidth: 0,
        height: '100%',
        backgroundColor: '#FFF7EF'
      }}>

        {contenido}

      </View>

    </View>
  );
}
