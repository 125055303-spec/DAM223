
import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  Screen,
  Title,
  SearchBar,
  Card,
  Img
} from '../components/components';

export default function UsuariosScreen({ cambiarPantalla }) {

  return (
    <Screen cambiarPantalla={cambiarPantalla} contenido={

      <>

        <Title contenido="Gestionar Usuarios" />

        <SearchBar placeholder="Buscar por nombre de usuario" />

        <Card style={{ padding: 12 }} contenido={

          <>

            <View style={estilos.encabezado}>
              <Img
                src={require('../assets/user.png')}
                label=""
                style={estilos.correo}
              />

              <Text style={estilos.correoTexto}>
                ashley.lopez@gmail.com
              </Text>

              <Text style={estilos.estrellas}>★★★★★</Text>
            </View>

            <View style={estilos.usuario}>

              <View style={estilos.foto}>
                <Img
                  src={require('../assets/user.png')}
                  label="Foto usuario"
                  style={estilos.imagen}
                />

                <Text style={estilos.nombre}>Ashley López</Text>
              </View>

              <View style={estilos.informacion}>
                <Text style={estilos.dato}>Usuario Regular</Text>
                <Text style={estilos.dato}>Inscripciones: 5</Text>
                <Text style={estilos.dato}>Cursos creados: 2</Text>
                <Text style={estilos.dato}>Créditos: 200</Text>
                <Text style={estilos.dato}>Estado: Activo</Text>
                <Text style={estilos.dato}>Fecha de registro: 02/10/2021</Text>
              </View>

            </View>

          </>
        } />

        <Card style={{ padding: 12 }} contenido={

          <>

            <View style={estilos.encabezado}>
              <Img
                src={require('../assets/user.png')}
                label=""
                style={estilos.correo}
              />

              <Text style={estilos.correoTexto}>
                valeria.hrz@gmail.com
              </Text>

              <Text style={estilos.estrellas}>★★★★★</Text>
            </View>

            <View style={estilos.usuario}>

              <View style={estilos.foto}>
                <Img
                  src={require('../assets/user.png')}
                  label="Foto usuario"
                  style={estilos.imagen}
                />

                <Text style={estilos.nombre}>Valeria Hernández</Text>
              </View>

              <View style={estilos.informacion}>
                <Text style={estilos.dato}>Usuario Maestro</Text>
                <Text style={estilos.dato}>Inscripciones: 10</Text>
                <Text style={estilos.dato}>Cursos creados: 15</Text>
                <Text style={estilos.dato}>Créditos: 450</Text>
                <Text style={estilos.dato}>Estado: Activo</Text>
                <Text style={estilos.dato}>Fecha de registro: 02/10/2019</Text>
              </View>

            </View>

          </>
        } />

        <Card style={{ padding: 12 }} contenido={

          <>

            <View style={estilos.encabezado}>
              <Img
                src={require('../assets/user.png')}
                label=""
                style={estilos.correo}
              />

              <Text style={estilos.correoTexto}>
                danEler2019@gmail.com
              </Text>

              <Text style={estilos.estrellas}>★★★☆☆</Text>
            </View>

            <View style={estilos.usuario}>

              <View style={estilos.foto}>
                <Img
                  src={require('../assets/user.png')}
                  label="Foto usuario"
                  style={estilos.imagen}
                />

                <Text style={estilos.nombre}>Daniel Martínez</Text>
              </View>

              <View style={estilos.informacion}>
                <Text style={estilos.dato}>Usuario Nuevo</Text>
                <Text style={estilos.dato}>Inscripciones: 3</Text>
                <Text style={estilos.dato}>Cursos creados: 1</Text>
                <Text style={estilos.dato}>Créditos: 50</Text>
                <Text style={estilos.dato}>Estado: Activo</Text>
                <Text style={estilos.dato}>Fecha de registro: 02/10/2026</Text>
              </View>

            </View>

          </>
        } />

      </>

    } />
  );
}

const estilos = StyleSheet.create({

  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6
  },

  correo: {
    width: 14,
    height: 14
  },

  correoTexto: {
    fontSize: 8,
    color: '#555555',
    marginLeft: 4,
    flex: 1
  },

  estrellas: {
    color: '#FFC107',
    fontSize: 20
  },

  usuario: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  foto: {
    alignItems: 'center',
    width: 96
  },

  imagen: {
    width: 70,
    height: 70,
    borderRadius: 35
  },

  nombre: {
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center',
    color: '#333333'
  },

  informacion: {
    flex: 1,
    marginLeft: 8
  },

  dato: {
    fontSize: 10,
    color: '#333333',
    marginVertical: 1
  }

});
