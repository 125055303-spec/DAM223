/*ZONA IMPORTACIONES*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from '../components/Perfil';

/*ZONA MAIN(COMPONENTES O SCREENS)*/

export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      <Perfil nombre="Ashley López" 
      carrera="Tecnologías de la Información" 
      materia="Móvil" 
      cuatri="4"
      style={styles.tarjeta1}>  </Perfil>
       <Perfil nombre="Michelle Ramírez" 
      carrera="Tecnologías de la Información" 
      materia="Móvil" 
      cuatri="4" 
      style={styles.tarjeta2}>  </Perfil>
       <Perfil nombre="Juan Hernández" 
      carrera="Tecnologías de la Información" 
      materia="Móvil" 
      cuatri="4" 
      style={styles.tarjeta3}>  </Perfil>

      <StatusBar style="auto" />
    </View>
  );
}
/*ZONA ESTÉTICA*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjeta1:{backgroundColor: '#ffb6e4'},
  tarjeta2:{backgroundColor: '#b6e4ff'},
  tarjeta3:{backgroundColor: '#b6ffb6'},
});
