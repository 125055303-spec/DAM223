/*ZONA IMPORTACIONES*/
import { StyleSheet,  View} from 'react-native';
import MenuScreen from './screens/MenuScreen';


/*ZONA MAIN(COMPONENTES O SCREENS)*/

export default function App() {
  return (
    <MenuScreen />
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
});
