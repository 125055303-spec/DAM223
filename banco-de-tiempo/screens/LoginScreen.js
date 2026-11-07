import React from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native';

import { Screen, Img } from '../components/components';

export default function LoginScreen({ cambiarPantalla }) {

  return (
    <Screen cambiarPantalla={cambiarPantalla} header={false}>

      <View style={{
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40
      }}>

        <Img
          src={null}
          label="Logo / icono de usuario"
          style={{ width: 170, height: 170, borderRadius: 85 }}
        />

      </View>

      <Text style={s.label}>Nombre de Usuario</Text>

      <TextInput style={s.input} />

      <Text style={s.label}>Contraseña</Text>

      <TextInput
        style={s.input}
        secureTextEntry
      />

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18
      }}>

        <View style={s.check}>
          <Text style={{ color: '#fff', fontWeight: '700' }}>✓</Text>
        </View>

        <Text style={s.label2}>Recuérdame</Text>

      </View>

      <Pressable
        style={s.btn}
        onPress={() => cambiarPantalla('Inicio')}
      >
        <Text style={s.btnTxt}>Regístrate</Text>
      </Pressable>

      <Text style={s.link}>¿Olvidaste tu contraseña?</Text>

    </Screen>
  );
}

const s = StyleSheet.create({

  label: {
    color: '#F28C28',
    fontSize: 15,
    marginTop: 18
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#F8C58A',
    height: 36,
    fontSize: 15,
    color: '#333333'
  },

  check: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#F28C28',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },

  label2: {
    color: '#F28C28',
    fontSize: 15
  },

  btn: {
    backgroundColor: '#F28C28',
    borderRadius: 26,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 34
  },

  btnTxt: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '600'
  },

  link: {
    color: '#F28C28',
    textAlign: 'center',
    marginTop: 18,
    fontSize: 15
  }

});