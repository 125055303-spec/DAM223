
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Switch,
  Text
} from 'react-native';

import { useState } from 'react';

export default function ActivityIndicatorScreen() {

  // Estados
  const [cargando, setCargando] = useState(false);
  const [esGrande, setEsGrande] = useState(false);
  const [cambiarColor, setCambiarColor] = useState(false);

  // Simular tiempo de carga
  const handleEnviar = () => {
    setCargando(true);

    setTimeout(() => {
      setCargando(false);
    }, 4000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={20}
      style={styles.container}
    >

      {/* Campo de texto */}
      <TextInput
        placeholder="Escribe algo..."
        style={styles.input}
      />

      {/* Indicador de carga o botón */}
      <View style={styles.actionContainer}>
        {cargando ? (
          <ActivityIndicator
            size={esGrande ? 'large' : 'small'}
            color={cambiarColor ? '#ff9cd9' : '#d5f7c6'}
          />
        ) : (
          <Button
            title="Enviar"
            onPress={handleEnviar}
          />
        )}
      </View>

      {/* Opciones para modificar el indicador */}
      <View style={styles.switchBox}>

        {/* Cambiar tamaño */}
        <View style={styles.switchRow}>
          <Text style={styles.switchText}>
            Hacer más grande
          </Text>

          <Switch
            value={esGrande}
            onValueChange={setEsGrande}
          />
        </View>

        {/* Cambiar color */}
        <View style={styles.switchRow}>
          <Text style={styles.switchText}>
            Cambiar color
          </Text>

          <Switch
            value={cambiarColor}
            onValueChange={setCambiarColor}
          />
        </View>

      </View>

    </KeyboardAvoidingView>
  );
}

// Estilos
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#ffbff2'
  },

  input: {
    borderWidth: 1,
    borderColor: '#cad6ff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#cbff97'
  },

  actionContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },

  switchBox: {
    borderWidth: 1,
    borderColor: '#ffcacd',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#ffe6ca'
  },

  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },

  switchText: {
    fontSize: 16
  }

});
