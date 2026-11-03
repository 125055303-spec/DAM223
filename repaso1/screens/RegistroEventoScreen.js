
/* ZONA IMPORTACIONES */

import { useState } from 'react';
import { View,  Text,TextInput,Switch, Alert,StyleSheet,ScrollView,Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/* ZONA MAIN */

export default function RegistroEventoScreen() {

  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(true);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(true);


  const enviarRegistro = () => {

    // Validar campos vacios
    if (
      nombre.trim() === '' ||
      carrera.trim() === '' ||
      semestre.trim() === ''
    ) {
      Alert.alert(
        'Campos incompletos',
        'Debes llenar todos los campos.'
      );
      return;
    }

    // Validar que el semestre sea numerico
    if (!/^\d+$/.test(semestre.trim())) {
      Alert.alert(
        'Error',
        'El semestre debe ser un numero.'
      );
      return;
    }

    // Mostrar los datos del registro
    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre.trim()}

Carrera: ${carrera.trim()}
Semestre: ${semestre.trim()}

Taller: ${taller ? 'Sí' : 'No'}
Constancia: ${constancia ? 'Sí' : 'No'}
Deportes: ${deportes ? 'Sí' : 'No'}`
    );

  };


  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >

        <View style={styles.formulario}>

          {/* TITULO */}

          <Text style={styles.titulo}>
            Registro de Evento Universitario
          </Text>


          {/* CAMPOS DE TEXTO */}

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Carrera"
            value={carrera}
            onChangeText={setCarrera}
          />

          <TextInput
            style={styles.input}
            placeholder="Semestre"
            value={semestre}
            onChangeText={setSemestre}
            keyboardType="numeric"
          />


          {/* OPCIONES */}

          <Text style={styles.subtitulo}>
            Opciones
          </Text>


          {}

          <View style={styles.opcion}>

            <Text style={styles.textoOpcion}>
              ¿Asistirá al taller?
            </Text>

            <Switch
              value={taller}
              onValueChange={setTaller}
              trackColor={{
                false: '#cccccc',
                true: '#f27bce'
              }}
              thumbColor={
                taller ? '#c20e77' : '#f4f3f4'
              }
            />

          </View>


          {}

          <View style={styles.opcion}>

            <Text style={styles.textoOpcion}>
              ¿Requiere constancia?
            </Text>

            <Switch
              value={constancia}
              onValueChange={setConstancia}
              trackColor={{
                false: '#cccccc',
                true: '#f27bce'
              }}
              thumbColor={
                constancia ? '#c20e77' : '#f4f3f4'
              }
            />

          </View>


          {}

          <View style={styles.opcion}>

            <Text style={styles.textoOpcion}>
              ¿Participará en deportes?
            </Text>

            <Switch
              value={deportes}
              onValueChange={setDeportes}
              trackColor={{
                false: '#cccccc',
                true: '#f27bce'
              }}
              thumbColor={
                deportes ? '#c20e77' : '#f4f3f4'
              }
            />

          </View>


          {}

          <Pressable
            style={styles.boton}
            onPress={enviarRegistro}
          >

            <Text style={styles.textoBoton}>
              Enviar Registro
            </Text>

          </Pressable>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}


/* ZONA ESTETICA */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },

  formulario: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    elevation: 4,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#222222',
  },

  input: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },

  opcion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  textoOpcion: {
    fontSize: 14,
    color: '#333333',
    flex: 1,
  },

  boton: {
    backgroundColor: '#f27bce',
    padding: 16,
    borderRadius: 9,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },

  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
