import { View, Text } from 'react-native';
import{useState}from 'react';
import { Button } from 'react-native';
import{ StyleSheet } from 'react-native';

export const Perfil = ({nombre,carrera,materia,cuatri,style}) => {
    const[mostrar,setMostrar]=useState(false);

  return (
    <View style={[estilos.tarjeta, style]}>
      <Text style={estilos.nombres}>{nombre}</Text>
      {mostrar && 
      <>
      <Text style={estilos.carrera}>{carrera}</Text>
      <Text style={estilos.otroTexto}>{materia}</Text>
      <Text style={estilos.otroTexto}>{cuatri}</Text>
      </>
}
<Button title="Ver perfil" onPress={ ()=>{setMostrar(!mostrar)} }>  </Button>
    </View>
  )
}
const estilos = StyleSheet.create({
  nombres:{
    fontSize: 24,
    fontWeight: 700,
    textTransform : 'uppercase',
  },
  carrera:{
    fontSize: 20,
    fontWeight: 500,
    textTransform : 'uppercase',
    fontFamily: 'Roboto',
    color: '#de5cf8',
  },
  otroTexto:{
    fontSize: 18,
    fontFamily: 'Courier',
    color: 'black',
    fontStyle: 'italic',
  },
  tarjeta:{
    borderWidth: 5,
    borderRadius: 15,
    padding: 14,
    margin: 10,
    borderColor: '#ffffa2',
  }
});