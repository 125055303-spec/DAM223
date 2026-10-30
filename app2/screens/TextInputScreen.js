/*IMPORTACIONES*/

import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Platform, StyleSheet } from 'react-native';

const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
        window.alert(`${titulo}\n\n${mensaje}`);
    } else {
        Alert.alert(titulo, mensaje);
    }
};
/*MAIN*/

export default function TextInputScreen() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');

    const registrar = () => {
        const faltantes = [];
        if (nombre.trim() === '') faltantes.push('Nombre');
        if (correo.trim() === '') faltantes.push('Correo');
        if (telefono.trim() === '') faltantes.push('Teléfono');

        if (faltantes.length > 0) {
            mostrarAlerta('Faltan datos', 'Completa: ' + faltantes.join(', '));
            return;
        }

        if (!correo.includes('@')) {
            mostrarAlerta('Correo inválido', 'El correo debe contener @');
            return;
        }

        if (telefono.length !== 10) {
            mostrarAlerta('Teléfono inválido', 'Debe tener 10 dígitos');
            return;
        }

        mostrarAlerta(
            'Datos registrados',
            `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}`
        );

        setNombre('');
        setCorreo('');
        setTelefono('');
    };

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Registro de datos</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder="Correo"
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Teléfono"
                value={telefono}
                onChangeText={setTelefono}
                keyboardType="numeric"
                maxLength={10}
            />

            <Button title="Registrar" onPress={registrar} />
        </View>
    );
}
/*ESTILOS*/
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        maxWidth: 400,
        width: '100%',
        alignSelf: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#fba1e3',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
    },
});