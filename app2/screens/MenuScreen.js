/*ZONA IMPORTACIONES*/
import { StyleSheet,  View , Text, Button} from 'react-native';
import { useState } from 'react';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';
import TextInputScreen  from './TextInputScreen';
import FlatList1Screen from './FlatList1Screen';
import FlatList2Screen from './FlatList2Screen';
import  ModalScreen from './ModalScreen'; 
import  ImageBackgroundScreen  from './ImageBackgroungScreen';
import  ActivityIndicatorScreen from './ActivityIndicatorScreen';

/*ZONA MAIN(COMPONENTES O SCREENS)*/

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');
  switch (screen) {
  case 'safe':
    return <SafeScreen />;
    case 'press':
    return <PressableScreen />;
    case 'practica':
    return <TarjetasScreen />;
    case 'text':
      return <TextInputScreen />;
    case 'list1':
      return <FlatList1Screen />;
    case 'list2':
      return <FlatList2Screen />;
    case 'modal':
      return <ModalScreen/>;
    case 'image':
      return <ImageBackgroundScreen/>;
    case 'activity':
      return <ActivityIndicatorScreen/>;
    case 'menu':
  default: 
    return (
    <View style={styles.container}>
      <Text>Menu de Practicas</Text>
      <Button title="Practica Tarjetas" onPress={() => setScreen('tarjetas')} />
      <Button title="Practica SafeAreaView" onPress={() => setScreen('safe')} />
      <Button title="Practica Pressable" onPress={() => setScreen('press')} />
      <Button title="Practica TextInput" onPress={() => setScreen('text')} />
      <Button title="Practica FlatList1" onPress={() => setScreen('list1')} />
      <Button title="Practica FlatList2" onPress={() => setScreen('list2')} />
      <Button title="Practica Modal" onPress={() => setScreen('modal')} />
      <Button title="Practica ImageBackground" onPress={() => setScreen('image')} />
      <Button title="Practica ActivityIndicator" onPress={() => setScreen('activity')} />
    </View>
  );

     }//switch
}//funcion

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
