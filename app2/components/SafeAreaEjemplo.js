import {use, useState} from "react";
import {Button, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafeAreaEjemplo() {
    const [mensaje, setMensaje] = useState("Bienvenidos a nuestra practica");
    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <Text style={styles.titulo}>Ejemplo de Safe Area</Text>
            <Text style={styles.mensaje}>{mensaje}</Text>
            <Button
                title="Cambiar Mensaje"
                onPress={() => setMensaje(mensaje==='Esta es nuestra practica'? 'Hola': 'Esta es nuestra practica')}
            />
        </SafeAreaView>

    );
}
/*ZONA ESTÉTICA*/

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fabfea',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    mensaje: {
        fontSize: 16,
        marginBottom: 10,
    }
});
