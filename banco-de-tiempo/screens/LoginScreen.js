
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
  Alert
} from 'react-native';

export default function LoginScreen({ cambiarPantalla }) {

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  function iniciarSesion() {

    if (usuario.trim() === '' || contrasena.trim() === '') {
      Alert.alert('Atención', 'Ingresa tu usuario y contraseña.');
      return;
    }

    Alert.alert(
      'Inicio de sesión',
      'No se pudo validar el acceso. Primero debemos conectar la validación de usuarios.'
    );
  }

  function registrarse() {

    if (usuario.trim() === '' || contrasena.trim() === '') {
      Alert.alert('Atención', 'Completa los campos para registrarte.');
      return;
    }

    Alert.alert(
      'Registro',
      'El registro todavía no está conectado. Puedes continuar en esta pantalla.'
    );
  }

  return (

    <ScrollView
      contentContainerStyle={s.contenedor}
      keyboardShouldPersistTaps="handled"
    >

      <View style={s.formulario}>

        <View style={s.logo}>

          <Image
            source={require('../assets/user.png')}
            style={s.imagen}
            resizeMode="contain"
          />

        </View>

        <Text style={s.titulo}>
          Banco de Tiempo
        </Text>

        <Text style={s.subtitulo}>
          Bienvenido
        </Text>

        <Text style={s.label}>
          Nombre de usuario
        </Text>

        <TextInput
          style={s.input}
          placeholder="Ingresa tu usuario"
          placeholderTextColor="#999"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
        />

        <Text style={s.label}>
          Contraseña
        </Text>

        <TextInput
          style={s.input}
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#999"
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry
        />

        <View style={s.recordar}>

          <View style={s.check}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
              ✓
            </Text>
          </View>

          <Text style={s.label2}>
            Recuérdame
          </Text>

        </View>

        <Pressable
          style={s.btn}
          onPress={iniciarSesion}
        >
          <Text style={s.btnTxt}>
            Iniciar sesión
          </Text>
        </Pressable>

        <Pressable onPress={registrarse}>
          <Text style={s.link}>
            ¿No tienes cuenta? Regístrate
          </Text>
        </Pressable>

        <Text style={s.link}>
          ¿Olvidaste tu contraseña?
        </Text>

      </View>

    </ScrollView>

  );
}

const s = StyleSheet.create({

  contenedor: {
    flexGrow: 1,
    backgroundColor: '#FFF7EF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  formulario: {
    width: '100%',
    maxWidth: 430,
    padding: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 25
  },

  logo: {
    alignItems: 'center',
    marginBottom: 20
  },

  imagen: {
    width: 125,
    height: 125,
    borderRadius: 62
  },

  titulo: {
    color: '#F28C28',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  subtitulo: {
    color: '#333',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 15
  },

  label: {
    color: '#F28C28',
    fontSize: 15,
    marginTop: 18,
    fontWeight: '600'
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#F8C58A',
    height: 45,
    fontSize: 15,
    color: '#333',
    paddingHorizontal: 5
  },

  recordar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
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
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },

  btnTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },

  link: {
    color: '#F28C28',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14
  }

});
