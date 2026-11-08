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
  Categorias,
  Card,
  Img
} from '../components/components';

export default function ReportesScreen({ cambiarPantalla }) {

  return (
    <Screen cambiarPantalla={cambiarPantalla} contenido={

      <>

        <Title contenido="Reportes" />

        <Categorias items={['Recientes', 'Esta semana', 'Más antiguos']} />

        <Card contenido={

          <View style={{ padding: 12 }}>

            <View style={estilos.encabezado}>

              <Img
                src={require('../assets/bell.png')}
                label="Campana"
                style={estilos.icono}
              />

              <Text style={estilos.numero}>Reporte #24</Text>

              <Pressable style={[estilos.boton, { backgroundColor: '#4CAF50' }]}>
                <Text style={estilos.textoBoton}>✓</Text>
              </Pressable>

              <Pressable style={[estilos.boton, { backgroundColor: '#F44336', marginLeft: 6 }]}>
                <Text style={estilos.textoBoton}>✕</Text>
              </Pressable>

            </View>

            <Text style={estilos.textoNaranja}>Usuario reportado: Carlos Torres</Text>
            <Text style={estilos.texto}>Reportado por: Ashley López</Text>
            <Text style={estilos.texto}>Fecha: 02/10/2026</Text>
            <Text style={estilos.textoNaranja}>Motivo: Contenido inapropiado</Text>

            <Text style={[estilos.texto, { marginTop: 8 }]}>Descripción:</Text>

            <Text style={estilos.texto}>
              Quiero reportar esta cuenta porque encontré contenido dentro de uno de sus cursos que considero inapropiado y que no debería estar disponible en la plataforma. Solicito que se revise el contenido y la cuenta.
            </Text>

          </View>

        } />

        <Card contenido={

          <View style={{ padding: 12 }}>

            <View style={estilos.encabezado}>

              <Img
                src={require('../assets/bell.png')}
                label="Campana"
                style={estilos.icono}
              />

              <Text style={estilos.numero}>Reporte #25</Text>

              <Pressable style={[estilos.boton, { backgroundColor: '#4CAF50' }]}>
                <Text style={estilos.textoBoton}>✓</Text>
              </Pressable>

              <Pressable style={[estilos.boton, { backgroundColor: '#F44336', marginLeft: 6 }]}>
                <Text style={estilos.textoBoton}>✕</Text>
              </Pressable>

            </View>

            <Text style={estilos.textoNaranja}>Usuario reportado: Sofía Ramírez</Text>
            <Text style={estilos.texto}>Reportado por: Carlos Jimenez</Text>
            <Text style={estilos.texto}>Fecha: 02/10/2026</Text>
            <Text style={estilos.textoNaranja}>Motivo: Spam en comentarios</Text>

            <Text style={[estilos.texto, { marginTop: 8 }]}>Descripción:</Text>

            <Text style={estilos.texto}>
              Quiero reportar a este usuario debido a que ha realizado varios comentarios repetitivos que parecen ser spam. Esto dificulta la interacción dentro de los cursos y afecta la experiencia de otros usuarios.
            </Text>

          </View>

        } />

      </>

    } />
  );
}

const estilos = StyleSheet.create({

  encabezado: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  icono: {
    width: 28,
    height: 28
  },

  numero: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    color: '#333333'
  },

  boton: {
    width: 24,
    height: 24,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textoBoton: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14
  },

  textoNaranja: {
    fontSize: 10,
    color: '#F28C28',
    marginTop: 3
  },

  texto: {
    fontSize: 10,
    color: '#333333',
    marginTop: 2
  }

});