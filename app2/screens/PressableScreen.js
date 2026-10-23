/*ZONA IMPORTACIONES*/
import { StyleSheet,  View} from 'react-native';


/*ZONA MAIN(COMPONENTES O SCREENS)*/

export default function PressableScreen() {
  return (
    <View style={styles.container}>
        <Text>Aqui va la práctica 11</Text>
        <Text>Equipo de Karen</Text>
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
});
