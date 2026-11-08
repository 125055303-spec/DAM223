import React from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';

import { Screen, Img } from '../components/components';

export default function MenuScreen({ cambiarPantalla }) {

  return (
    <Screen cambiarPantalla={cambiarPantalla} header={false}>

      <View style={{ height: 690 }}>

        <View style={{ position: 'absolute', top: 14, right: 0 }}>

          <Pressable onPress={() => cambiarPantalla('MiPerfil')}>
            <Img
              src={require('../assets/user.png')}
              label="Perfil"
              style={{ width: 44, height: 44, borderRadius: 22 }}
            />
          </Pressable>

        </View>

        <View style={s.panel}>

          <Pressable style={s.item} onPress={() => cambiarPantalla('Inicio')}>
            <Img src={require('../assets/casa.png')} label="Casa" style={s.ico} />
            <Text style={s.txt}>INICIO</Text>
          </Pressable>

          <Pressable style={s.item} onPress={() => cambiarPantalla('Cursos')}>
            <Img src={require('../assets/curso.webp')} label="Curso" style={s.ico} />
            <Text style={s.txt}>CURSOS</Text>
          </Pressable>

          <Pressable style={s.item} onPress={() => cambiarPantalla('Usuarios')}>
            <Img src={require('../assets/user.png')} label="Usuarios" style={s.ico} />
            <Text style={s.txt}>USUARIOS</Text>
          </Pressable>

          <Pressable style={s.item} onPress={() => cambiarPantalla('Reportes')}>
            <Img src={require('../assets/report.png')} label="Reportes" style={s.ico} />
            <Text style={s.txt}>REPORTES</Text>
          </Pressable>

          <Pressable style={s.item} onPress={() => cambiarPantalla('Solicitudes')}>
            <Img src={require('../assets/lapiz.png')} label="Sobre" style={s.ico} />
            <Text style={s.txt}>SOLICITUDES</Text>
          </Pressable>

          <Pressable style={s.item} onPress={() => cambiarPantalla('Graficas')}>
            <Img src={require('../assets/graf.png')} label="Gráfica" style={s.ico} />
            <Text style={s.txt}>GRÁFICAS</Text>
          </Pressable>

          <View style={{ flex: 1 }} />

          <Pressable style={s.item} onPress={() => cambiarPantalla('Login')}>
            <Img src={require('../assets/back.png')} label="Salir" style={s.ico} />
            <Text style={s.txt}>CERRAR SESIÓN</Text>
          </Pressable>

        </View>

      </View>

    </Screen>
  );
}

const s = StyleSheet.create({

  panel: {
    position: 'absolute',
    left: -22,
    top: 14,
    bottom: 0,
    width: 292,
    backgroundColor: '#F28C28',
    borderRadius: 18,
    padding: 10
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E85D00',
    borderRadius: 10,
    padding: 6,
    marginBottom: 8
  },

  ico: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    marginRight: 10
  },

  txt: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13
  }

});