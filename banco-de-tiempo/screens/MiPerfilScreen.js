
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import perfil from '../assets/user.png';
import contraseña from '../assets/lock.png';
import rol from '../assets/user.png';
import seguridad from '../assets/candado.png';
import acceso from '../assets/login.png';
import usuario from '../assets/switch.png';

export default function MiPerfilScreen({ cambiarPantalla }) {

  return (
    <View style={estilos.contenedor}>

      <Text style={estilos.titulo}>Mi perfil</Text>

      <Text style={estilos.subtitulo}>
        Administra tu información y consulta tu actividad.
      </Text>

      <View style={estilos.contenedorFoto}>

        <Image
          source={perfil}
          style={estilos.foto}
        />

        <Text style={estilos.editarFoto}>
          Editar foto de perfil
        </Text>

      </View>

      <View style={estilos.fila}>

        <View style={[estilos.opcion, { flex: 1.3 }]}>
          <Image source={seguridad} style={estilos.icono} />

          <Text style={estilos.textoOpcion}>
            Cambiar contraseña
          </Text>
        </View>

        <View style={[estilos.opcion, { flex: 1 }]}>
          <Image source={rol} style={estilos.icono} />

          <Text style={estilos.textoOpcion}>
            Rol
          </Text>
        </View>

      </View>

      <View style={estilos.fila}>

        <View style={[estilos.opcion, { flex: 1 }]}>
          <Image source={contraseña} style={estilos.icono} />

          <Text style={estilos.textoOpcion}>
            Configuración de seguridad
          </Text>
        </View>

      </View>

      <View style={estilos.fila}>

        <View style={[estilos.opcion, { flex: 1 }]}>
          <Image source={acceso} style={estilos.icono} />

          <Text style={estilos.textoOpcion}>
            Acceso
          </Text>
        </View>

        <View style={[estilos.opcion, { flex: 1.2 }]}>
          <Image source={usuario} style={estilos.icono} />

          <Text style={estilos.textoOpcion}>
            Cambiar usuario
          </Text>
        </View>

      </View>

    </View>
  );
}

const estilos = StyleSheet.create({

  contenedor: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E87524',
    marginBottom: 8
  },

  subtitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555555',
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
    color: '#555555',
    marginTop: 8
  },

  fila: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10
  },

  opcion: {
    borderWidth: 1,
    borderColor: '#E87524',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: 'center'
  },

  icono: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginBottom: 6
  },

  textoOpcion: {
    color: '#F29A52',
    fontSize: 13,
    textAlign: 'center'
  }

});