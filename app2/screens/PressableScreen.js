/*ZONA IMPORTACIONES*/
import { StyleSheet,  View, Switch, Pressable, Text} from 'react-native';
import {useState} from 'react';


/*ZONA MAIN(COMPONENTES O SCREENS)*/

export default function PressableScreen() {
  const [encendido, setEncendido] = useState(false);
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Práctica 11</Text>
        <Text>Equipo de Karen</Text>
        <Switch
          value={encendido}
          onValueChange={(valor) => setEncendido(valor)}
        />
        <Text style={styles.texto}>El switch está: {encendido ? 'Encendido' : 'Apagado'}</Text>
        <Pressable
        style={styles.boton}
        onPress={() => setContador(contador + 1)}
        >
          <Text style={styles.textoBoton}>Presionar</Text>
        </Pressable>
        <Text style={styles.texto}>Veces presionado: {contador}</Text>
    </View>
  );
}
/*ZONA ESTÉTICA*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcdff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  texto: {
    fontSize: 18,
    marginVertical: 15,
  },
  boton: {
    backgroundColor: '#ef88bb',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    marginVertical: 15,
  },
  textoBoton: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
