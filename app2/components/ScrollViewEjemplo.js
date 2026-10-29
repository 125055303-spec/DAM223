import {useState} from 'react';
import {Button, StyleSheet, Text, View,ScrollView} from 'react-native';

export default function ScrollViewEjemplo() {
    const[desplazar, setDesplazar] = useState(true);
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Ejemplo de ScrollView</Text>
            <Button
                title={desplazar ? 'Desactivar Desplazamiento' : 'Activar Scroll'}
                onPress={() => setDesplazar(!desplazar)}
            />
            <ScrollView style={styles.lista} 
            contentContainerStyle={styles.contenido}
            showsVerticalScrollIndicator={true}
            scrollEnabled={desplazar}>
                <View style={styles.tarjeta1}>
                    <Text>Tarjeta 1</Text>
                </View>
                   <View style={styles.tarjeta2}>
                    <Text>Tarjeta 2</Text>
                </View>
                   <View style={styles.tarjeta3}>
                    <Text>Tarjeta 3</Text>
                </View>
                   <View style={styles.tarjeta4}>
                    <Text>Tarjeta 4</Text>
                </View>
            </ScrollView>
        </View>
    )
}
/*ZONA ESTÉTICA*/

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f8abe3',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    lista: {
        height: 200,
        flexGrow: 0,
        marginTop: 10,
    },
    contenido: {
        paddingBottom: 20,
    },
    tarjeta1: {
        backgroundColor: '#c3f99e',
        padding: 25,
        marginBottom: 10,
        borderRadius: 8,
    },
    tarjeta2: {
        backgroundColor: '#f8d9ab',
        padding: 25,
        marginBottom: 10,
        borderRadius: 8,
    },
    tarjeta3: {
        backgroundColor: '#edef7e',
        padding: 25,
        marginBottom: 10,
        borderRadius: 8,
    },
    tarjeta4: {
        backgroundColor: '#abc9f8',
        padding: 25,
        marginBottom: 10,
        borderRadius: 8,
    }
})