import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {
  Screen,
  Title
} from '../components/components';

export default function InicioAdminScreen({ cambiarPantalla }) {

  return (
    <Screen cambiarPantalla={cambiarPantalla}>

      <Title>¡Bienvenido{"\n"}Administrador!</Title>

      <Text style={{
        fontWeight: '700',
        fontSize: 14,
        marginTop: 14,
        marginBottom: 10
      }}>
        Cursos MEJOR valorados
      </Text>

      <View>
        {[
          ['Diseño UX/UI', 5],
          ['Python', 4.8],
          ['Programación Web', 4.7],
          ['Bases de Datos', 4.6],
          ['Java', 4.5]
        ].map((curso, indice) => (

          <View key={indice} style={{ marginBottom: 10 }}>

            <Text style={{ fontSize: 13 }}>
              {curso[0]} - {curso[1]}
            </Text>

            <View style={{
              height: 12,
              backgroundColor: '#EEEEEE',
              borderRadius: 6
            }}>
              <View style={{
                height: 12,
                width: `${curso[1] * 20}%`,
                backgroundColor: '#F28C28',
                borderRadius: 6
              }} />
            </View>

          </View>
        ))}
      </View>

      <Text style={{
        fontWeight: '700',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10
      }}>
        Cursos PEOR valorados
      </Text>

      <View>
        {[
          ['Intro a C++', 2.8],
          ['Matemáticas Bás.', 3],
          ['Redes Informáticas', 3.2],
          ['Fundamentos de I.', 3.4],
          ['Ofimática', 3.6]
        ].map((curso, indice) => (

          <View key={indice} style={{ marginBottom: 10 }}>

            <Text style={{ fontSize: 13 }}>
              {curso[0]} - {curso[1]}
            </Text>

            <View style={{
              height: 12,
              backgroundColor: '#EEEEEE',
              borderRadius: 6
            }}>
              <View style={{
                height: 12,
                width: `${curso[1] * 20}%`,
                backgroundColor: '#F28C28',
                borderRadius: 6
              }} />
            </View>

          </View>
        ))}
      </View>

    </Screen>
  );
}