import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import {
  Screen,
  Title,
  Img
} from '../components/components';

import {
  naranja,
  naranjaClaro,
  texto
} from '../components/colores';

import perfil from '../assets/user.png';
import contraseña from '../assets/lock.png';
import rol from '../assets/group.png';
import seguridad from '../assets/candado.png';
import acceso from '../assets/login.png';
import usuario from '../assets/switch.png';

export default function MiPerfilScreen({ cambiarPantalla }) {

  return (
    <Screen cambiarPantalla={cambiarPantalla}>

      <Title>Mi perfil</Title>

      <Text style={estilos.subtitulo}>
        Administra tu información y consulta tu actividad.
      </Text>

      <View style={estilos.contenedorFoto}>

        <Img
          src={null}
          label="Foto de perfil"
          style={estilos.foto}
        />

        <Text style={estilos.editarFoto}>
          Editar foto de perfil
        </Text>

      </View>

      <View style={estilos.fila}>

        <View style={[estilos.opcion, { flex: 1.3 }]}>
          <Text style={estilos.textoOpcion}>
            Cambiar contraseña
          </Text>
        </View>

        <View style={[estilos.opcion, { flex: 1 }]}>
          <Text style={estilos.textoOpcion}>
            Rol
          </Text>
        </View>

      </View>

      <View style={estilos.fila}>

        <View style={[estilos.opcion, { flex: 1 }]}>
          <Text style={estilos.textoOpcion}>
            Configuración de seguridad
          </Text>
        </View>

      </View>

      <View style={estilos.fila}>

        <View style={[estilos.opcion, { flex: 1 }]}>
          <Text style={estilos.textoOpcion}>
            Acceso
          </Text>
        </View>

        <View style={[estilos.opcion, { flex: 1.2 }]}>
          <Text style={estilos.textoOpcion}>
            Cambiar usuario
          </Text>
        </View>

      </View>

    </Screen>
  );
}

const estilos = StyleSheet.create({

  subtitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: texto,
    maxWidth: 260
  },

  contenedorFoto: {
    alignItems: 'center',
    marginVertical: 18
  },

  foto: {
    width: 130,
    height: 130,
    borderRadius: 65
  },

  editarFoto: {
    fontSize: 13,
    fontWeight: '600',
    color: texto,
    marginTop: 8
  },

  fila: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10
  },

  opcion: {
    borderWidth: 1,
    borderColor: naranja,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12
  },

  textoOpcion: {
    color: naranjaClaro,
    fontSize: 13
  }

});