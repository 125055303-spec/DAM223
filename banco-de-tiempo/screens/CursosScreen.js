import React from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';

import {
  Screen,
  Title,
  SearchBar,
  Card,
  Img
} from '../components/components';

export default function CursosScreen({ cambiarPantalla }) {

  return (
    <Screen cambiarPantalla={cambiarPantalla}>

      <Title>Gestionar Cursos</Title>

      <SearchBar placeholder="Buscar por categoría" />

      <Card>

        <Img
          src={null}
          label="Portada del curso"
          style={{ width: '100%', height: 120, borderRadius: 10 }}
        />

        <Text style={estilos.titulo}>
          Inteligencia Artificial y productividad
        </Text>

        <Text style={estilos.descripcion}>
          Aprende los aspectos básicos de la IA para impulsar tu productividad diaria
        </Text>

        <View style={estilos.botones}>

          <Pressable style={estilos.boton}>
            <Img src={null} label="Ojo" style={estilos.icono} />
            <Text style={estilos.textoBoton}>Ocultar</Text>
          </Pressable>

          <Pressable style={estilos.boton}>
            <Img src={null} label="Alerta" style={estilos.icono} />
            <Text style={estilos.textoBoton}>Alerta</Text>
          </Pressable>

          <Pressable style={estilos.boton}>
            <Img src={null} label="Basura" style={estilos.icono} />
            <Text style={estilos.textoBoton}>Eliminar</Text>
          </Pressable>

        </View>

      </Card>

      <Card>

        <Img
          src={null}
          label="Portada del curso"
          style={{ width: '100%', height: 120, borderRadius: 10 }}
        />

        <Text style={estilos.titulo}>
          Aprende sobre la programación orientada a objetos
        </Text>

        <Text style={estilos.descripcion}>
          Aprende los fundamentos de la Programación Orientada a Objetos para mejorar tus habilidades de programación y crear aplicaciones de manera estructurada.
        </Text>

        <View style={estilos.botones}>

          <Pressable style={estilos.boton}>
            <Img src={null} label="Ojo" style={estilos.icono} />
            <Text style={estilos.textoBoton}>Ocultar</Text>
          </Pressable>

          <Pressable style={estilos.boton}>
            <Img src={null} label="Alerta" style={estilos.icono} />
            <Text style={estilos.textoBoton}>Alerta</Text>
          </Pressable>

          <Pressable style={estilos.boton}>
            <Img src={null} label="Basura" style={estilos.icono} />
            <Text style={estilos.textoBoton}>Eliminar</Text>
          </Pressable>

        </View>

      </Card>

    </Screen>
  );
}

const estilos = StyleSheet.create({

  titulo: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333333',
    marginTop: 10
  },

  descripcion: {
    fontSize: 11,
    color: '#333333',
    marginTop: 4
  },

  botones: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 14,
    marginTop: 10
  },

  boton: {
    alignItems: 'center'
  },

  icono: {
    width: 18,
    height: 18
  },

  textoBoton: {
    color: '#F28C28',
    fontSize: 9
  }

});