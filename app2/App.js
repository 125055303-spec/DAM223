/*ZONA IMPORTACIONES*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

/*ZONA MAIN(COMPONENTES O SCREENS)*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <Image source={require('./assets/wave.png')} /> 
      <Saludo />
      <Saludo2 />
      <Perfil />

      <StatusBar style="auto" />
    </View>
  );
}
/*ZONA ESTÉTICA*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
