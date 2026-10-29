/*ZONA IMPORTACIONES*/
import { StyleSheet,  View} from 'react-native';
import MenuScreen from './screens/MenuScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/*ZONA MAIN(COMPONENTES O SCREENS)*/

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <MenuScreen />
      </View>
    </SafeAreaProvider>
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