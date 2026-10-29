/*ZONA IMPORTACIONES*/
import { StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SafeAreaEjemplo from '../components/SafeAreaEjemplo';
import ScrollViewEjemplo from '../components/ScrollViewEjemplo';

/*ZONA MAIN(COMPONENTES O SCREENS)*/

export default function SafeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Text style={styles.tituloPrincipal}>Aquí va la practica 10- equipo de Dulce</Text>
      <SafeAreaEjemplo />
      <ScrollViewEjemplo />
    </SafeAreaView>
  );
}
/*ZONA ESTÉTICA*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
});