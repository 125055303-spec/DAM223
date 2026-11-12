
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking
} from 'react-native';

import {
  Screen,
  Title
} from '../components/components';

/* COLORES */
const NARANJA = '#F28C28';
const NARANJA_SUAVE = '#FDEBD6';
const TEXTO = '#333333';
const TEXTO_SUAVE = '#777777';
const VERDE = '#2E9E5B';
const ROJO = '#D64545';
const GRIS = '#EEEEEE';

/* PANTALLA DE DETALLE */
export default function UsuarioDetalleScreen({
  usuario,
  volver,
  setUsuarios
}) {

  if (!usuario) {
    return (
      <Screen contenido={
        <View>
          <Text style={estilos.valor}>
            No se encontró el usuario.
          </Text>

          <TouchableOpacity
            style={estilos.botonNaranja}
            onPress={volver}
          >
            <Text style={estilos.textoBotonBlanco}>
              Regresar
            </Text>
          </TouchableOpacity>
        </View>
      } />
    );
  }

  const suspendido = usuario.estado === 'Suspendido';

  /* CONTACTAR POR CORREO */
  const contactar = () => {
    Linking.openURL(`mailto:${usuario.correo}`);
  };

  /* SUSPENDER O REACTIVAR */
  const cambiarEstado = () => {

    const nuevoEstado = suspendido
      ? 'Activo'
      : 'Suspendido';

    Alert.alert(
      suspendido ? 'Reactivar cuenta' : 'Suspender cuenta',
      suspendido
        ? `¿Quieres permitir que ${usuario.nombre} vuelva a utilizar la plataforma?`
        : `¿Quieres suspender la cuenta de ${usuario.nombre}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: suspendido ? 'Reactivar' : 'Suspender',
          onPress: () => {
            setUsuarios((lista) =>
              lista.map((u) =>
                u.id === usuario.id
                  ? { ...u, estado: nuevoEstado }
                  : u
              )
            );

            volver();
          }
        }
      ]
    );
  };

  /* ELIMINAR USUARIO */
  const eliminar = () => {

    Alert.alert(
      'Eliminar usuario',
      `¿Estás seguro de que deseas eliminar la cuenta de ${usuario.nombre}? Esta acción no se puede deshacer.`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            setUsuarios((lista) =>
              lista.filter((u) => u.id !== usuario.id)
            );

            volver();
          }
        }
      ]
    );
  };

  return (
    <Screen contenido={

      <>

        {/* REGRESAR */}

        <TouchableOpacity
          style={estilos.botonRegresar}
          onPress={volver}
        >
          <Text style={estilos.textoRegresar}>
            ← Regresar a usuarios
          </Text>
        </TouchableOpacity>

        <Title contenido="Perfil del usuario" />

        {/* INFORMACIÓN PRINCIPAL */}

        <View style={estilos.perfil}>

          <View style={estilos.avatar}>
            <Text style={estilos.letraAvatar}>
              {usuario.nombre.charAt(0).toUpperCase()}
            </Text>
          </View>

          <Text style={estilos.nombre}>
            {usuario.nombre}
          </Text>

          <Text style={estilos.correo}>
            {usuario.correo}
          </Text>

          <View style={estilos.insignias}>

            <Text style={estilos.rol}>
              Usuario {usuario.rol}
            </Text>

            <Text
              style={[
                estilos.estado,
                {
                  color: suspendido ? ROJO : VERDE,
                  backgroundColor: suspendido ? '#FBE3E3' : '#DDF3E6'
                }
              ]}
            >
              {usuario.estado}
            </Text>

          </View>

          <Text style={estilos.estrellas}>
            {'★'.repeat(usuario.estrellas)}
            {'☆'.repeat(5 - usuario.estrellas)}
          </Text>

        </View>

        {/* INFORMACIÓN DE LA CUENTA */}

        <View style={estilos.seccion}>

          <Text style={estilos.tituloSeccion}>
            Información de la cuenta
          </Text>

          <View style={estilos.dato}>
            <Text style={estilos.etiqueta}>
              ID de usuario
            </Text>
            <Text style={estilos.valor}>
              {usuario.id}
            </Text>
          </View>

          <View style={estilos.dato}>
            <Text style={estilos.etiqueta}>
              Correo electrónico
            </Text>
            <Text style={estilos.valor}>
              {usuario.correo}
            </Text>
          </View>

          <View style={estilos.dato}>
            <Text style={estilos.etiqueta}>
              Tipo de usuario
            </Text>
            <Text style={estilos.valor}>
              {usuario.rol}
            </Text>
          </View>

          <View style={estilos.dato}>
            <Text style={estilos.etiqueta}>
              Fecha de registro
            </Text>
            <Text style={estilos.valor}>
              {usuario.registro}
            </Text>
          </View>

        </View>

        {/* ACTIVIDAD */}

        <View style={estilos.seccion}>

          <Text style={estilos.tituloSeccion}>
            Actividad en la plataforma
          </Text>

          <View style={estilos.tarjetas}>

            <View style={estilos.tarjeta}>
              <Text style={estilos.numero}>
                {usuario.inscripciones}
              </Text>
              <Text style={estilos.etiquetaTarjeta}>
                Inscripciones
              </Text>
            </View>

            <View style={estilos.tarjeta}>
              <Text style={estilos.numero}>
                {usuario.cursosCreados}
              </Text>
              <Text style={estilos.etiquetaTarjeta}>
                Cursos creados
              </Text>
            </View>

            <View style={estilos.tarjeta}>
              <Text style={estilos.numero}>
                {usuario.creditos}
              </Text>
              <Text style={estilos.etiquetaTarjeta}>
                Créditos
              </Text>
            </View>

          </View>

          <View style={estilos.dato}>
            <Text style={estilos.etiqueta}>
              Calificación promedio
            </Text>
            <Text style={estilos.valor}>
              {usuario.estrellas} de 5 estrellas
            </Text>
          </View>

        </View>

        {/* ACCIONES ADMINISTRATIVAS */}

        <View style={estilos.seccion}>

          <Text style={estilos.tituloSeccion}>
            Acciones administrativas
          </Text>

          <Text style={estilos.descripcion}>
            Administra el acceso y la comunicación con este usuario.
          </Text>

          <TouchableOpacity
            style={estilos.botonNaranja}
            onPress={contactar}
          >
            <Text style={estilos.textoBotonBlanco}>
              Contactar por correo
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              estilos.boton,
              {
                borderColor: suspendido ? VERDE : TEXTO_SUAVE
              }
            ]}
            onPress={cambiarEstado}
          >
            <Text
              style={[
                estilos.textoBoton,
                { color: suspendido ? VERDE : TEXTO_SUAVE }
              ]}
            >
              {suspendido ? 'Reactivar cuenta' : 'Suspender cuenta'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              estilos.boton,
              { borderColor: ROJO }
            ]}
            onPress={eliminar}
          >
            <Text style={[estilos.textoBoton, { color: ROJO }]}>
              Eliminar usuario
            </Text>
          </TouchableOpacity>

        </View>

        <View style={{ height: 25 }} />

      </>

    } />
  );
}

/* ESTILOS */
const estilos = StyleSheet.create({

  botonRegresar: {
    marginBottom: 15
  },

  textoRegresar: {
    color: NARANJA,
    fontSize: 13,
    fontWeight: 'bold'
  },

  perfil: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 2
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: NARANJA,
    justifyContent: 'center',
    alignItems: 'center'
  },

  letraAvatar: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold'
  },

  nombre: {
    color: TEXTO,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },

  correo: {
    color: TEXTO_SUAVE,
    fontSize: 12,
    marginTop: 4
  },

  insignias: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12
  },

  rol: {
    color: NARANJA,
    backgroundColor: NARANJA_SUAVE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 11,
    fontWeight: 'bold',
    marginRight: 7
  },

  estado: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 11,
    fontWeight: 'bold'
  },

  estrellas: {
    color: '#FFC107',
    fontSize: 24,
    marginTop: 8
  },

  seccion: {
    marginTop: 18,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    elevation: 2
  },

  tituloSeccion: {
    color: TEXTO,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 12
  },

  descripcion: {
    color: TEXTO_SUAVE,
    fontSize: 12,
    marginBottom: 12
  },

  dato: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: GRIS
  },

  etiqueta: {
    color: TEXTO_SUAVE,
    fontSize: 11
  },

  valor: {
    color: TEXTO,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 3
  },

  tarjetas: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  tarjeta: {
    width: '32%',
    backgroundColor: NARANJA_SUAVE,
    borderRadius: 9,
    padding: 10,
    alignItems: 'center'
  },

  numero: {
    color: NARANJA,
    fontSize: 22,
    fontWeight: 'bold'
  },

  etiquetaTarjeta: {
    color: TEXTO_SUAVE,
    fontSize: 10,
    textAlign: 'center',
    marginTop: 3
  },

  botonNaranja: {
    backgroundColor: NARANJA,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 9
  },

  boton: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 9
  },

  textoBotonBlanco: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold'
  },

  textoBoton: {
    fontSize: 12,
    fontWeight: 'bold'
  }

});
