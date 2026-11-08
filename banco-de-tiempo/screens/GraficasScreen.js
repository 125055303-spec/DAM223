import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {
  Screen,
  Title
} from '../components/components';

export default function GraficasScreen({ cambiarPantalla }) {

  const cursosPopulares = [
    ['Programación Web', 130],
    ['Diseño UX/UI', 90],
    ['Python', 70],
    ['Bases de Datos', 55],
    ['Java', 40]
  ];

  const usuariosPorMes = [
    ['Junio', 120],
    ['Julio', 160],
    ['Agosto', 190],
    ['Septiembre', 215],
    ['Octubre', 245]
  ];

  return (
    <Screen cambiarPantalla={cambiarPantalla} contenido={

      <>

        <Title contenido="Gráficas" />

        <Text style={estilos.titulo}>
          Cursos más populares
        </Text>

        <Text style={estilos.descripcion}>
          Cantidad de usuarios inscritos en cada curso
        </Text>

        {cursosPopulares.map((curso, indice) => (

          <View key={indice} style={estilos.contenedorBarra}>

            <Text style={estilos.nombre}>
              {curso[0]}
            </Text>

            <View style={estilos.fondoBarra}>
              <View
                style={[
                  estilos.barra,
                  { width: `${(curso[1] / 140) * 100}%` }
                ]}
              />
            </View>

            <Text style={estilos.cantidad}>
              {curso[1]}
            </Text>

          </View>
        ))}

        <Text style={estilos.titulo}>
          Usuarios activos por mes
        </Text>

        <Text style={estilos.descripcion}>
          Cantidad de usuarios que realizaron alguna actividad en la plataforma durante cada mes.
        </Text>

        {usuariosPorMes.map((mes, indice) => (

          <View key={indice} style={estilos.contenedorBarra}>

            <Text style={estilos.nombre}>
              {mes[0]}
            </Text>

            <View style={estilos.fondoBarra}>
              <View
                style={[
                  estilos.barra,
                  { width: `${(mes[1] / 250) * 100}%` }
                ]}
              />
            </View>

            <Text style={estilos.cantidad}>
              {mes[1]}
            </Text>

          </View>
        ))}

      </>

    } />
  );
}

const estilos = {

  titulo: {
    fontWeight: '700',
    fontSize: 15,
    marginTop: 10
  },

  descripcion: {
    fontSize: 11,
    marginBottom: 12,
    color: '#555555'
  },

  contenedorBarra: {
    marginBottom: 12
  },

  nombre: {
    fontSize: 12,
    marginBottom: 4,
    color: '#333333'
  },

  fondoBarra: {
    height: 14,
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    overflow: 'hidden'
  },

  barra: {
    height: 14,
    backgroundColor: '#F28C28',
    borderRadius: 5
  },

  cantidad: {
    fontSize: 11,
    color: '#333333',
    textAlign: 'right',
    marginTop: 2
  }

};