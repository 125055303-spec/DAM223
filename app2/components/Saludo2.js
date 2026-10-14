import {View,Button,Text,Image} from 'react-native'

export const Saludo2=()=>{
    return(
        <View>

        <Text>  Hola RN: Componentes propio</Text>
        <Image source={require('../assets/wave.png')}/>
        <Button title="Presiona para saludar">  </Button>

        </View>
    );
}