
import React from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
  TextInput
} from 'react-native';

export default function CursosScreen({ cambiarPantalla }) {

  return (
    <ScrollView style={estilos.fondo}>

      <Text style={estilos.encabezado}>
        Gestionar Cursos
      </Text>

      <View style={estilos.contenedorBuscar}>

        <TextInput
          style={estilos.buscar}
          placeholder="Buscar por categoría"
          placeholderTextColor="#888888"
        />

        <Image
          source={require('../assets/buscar.png')}
          style={estilos.imagenLupa}
        />

      </View>

      {/* Primer curso */}
      <View style={estilos.tarjeta}>

        <Image
          source={require('../assets/curso.webp')}
          style={estilos.portada}
        />

        <Text style={estilos.titulo}>
          Inteligencia Artificial y productividad
        </Text>

        <Text style={estilos.descripcion}>
          Aprende los aspectos básicos de la IA para impulsar tu productividad diaria.
        </Text>

        <View style={estilos.botones}>

          <Pressable style={estilos.boton}>
            <Image source={require('../assets/ver.png')} style={estilos.icono} />
            <Text style={estilos.textoBoton}>Ocultar</Text>
          </Pressable>

          <Pressable style={estilos.boton}>
            <Image source={require('../assets/alerta.png')} style={estilos.icono} />
            <Text style={estilos.textoBoton}>Alerta</Text>
          </Pressable>

          <Pressable style={estilos.boton}>
            <Image source={require('../assets/borra.png')} style={estilos.icono} />
            <Text style={estilos.textoBoton}>Eliminar</Text>
          </Pressable>

        </View>
      </View>

      {/* Segundo curso */}
      <View style={estilos.tarjeta}>

        <Image
          source={require('../assets/curso2.jpg')}
          style={estilos.portada}
        />

        <Text style={estilos.titulo}>
          Aprende sobre la programación orientada a objetos
        </Text>

        <Text style={estilos.descripcion}>
          Aprende los fundamentos de la Programación Orientada a Objetos para mejorar tus habilidades de programación y crear aplicaciones de manera estructurada.
        </Text>

        <View style={estilos.botones}>

          <Pressable style={estilos.boton}>
            <Image source={require('../assets/ver.png')} style={estilos.icono} />
            <Text style={estilos.textoBoton}>Ocultar</Text>
          </Pressable>

          <Pressable style={estilos.boton}>
            <Image source={require('../assets/alerta.png')} style={estilos.icono} />
            <Text style={estilos.textoBoton}>Alerta</Text>
          </Pressable>

          <Pressable style={estilos.boton}>
            <Image source={require('../assets/borra.png')} style={estilos.icono} />
            <Text style={estilos.textoBoton}>Eliminar</Text>
          </Pressable>

        </View>
      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({

  fondo: {
    flex: 1,
    backgroundColor: '#FFF1DC',
    padding: 15
  },

  encabezado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15
  },

  contenedorBuscar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 15
  },

  buscar: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 13
  },

  imagenLupa: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15
  },

  portada: {
    width: '100%',
    height: 120,
    borderRadius: 10
  },

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
