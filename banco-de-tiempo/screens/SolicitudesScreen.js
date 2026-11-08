import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  Screen,
  Title,
  Card,
  Img
} from '../components/components';

export default function SolicitudesScreen({ cambiarPantalla }) {

  return (
    <Screen cambiarPantalla={cambiarPantalla} contenido={

      <>

        <Title contenido="Solicitudes" />

        <Card style={{ padding: 12 }} contenido={

          <>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={estilos.texto}>Solicitud para subir un curso</Text>
                <Text style={estilos.texto}>Usuario: Ashley López</Text>
                <Text style={estilos.texto}>Fecha: 02/10/2026</Text>
                <Text style={estilos.texto}>Tipo: Publicación de curso</Text>
                <Text style={estilos.texto}>Descripción:</Text>
              </View>

              <Img src={require('../assets/user.png')} label="Monitor / curso" style={estilos.icono} />
            </View>

            <View style={estilos.descripcion}>
              <Text style={estilos.texto}>
                Quiero solicitar la publicación de mi curso en la plataforma. Ya agregué la información, descripción, contenido y material correspondiente, por lo que solicito que sea revisado y aprobado.
              </Text>
            </View>

          </>
        } />

        <Card style={{ padding: 12 }} contenido={

          <>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={estilos.texto}>Solicitud para editar un curso</Text>
                <Text style={estilos.texto}>Tipo: Modificación de curso</Text>
                <Text style={estilos.texto}>Descripción:</Text>
              </View>

              <Img src={require('../assets/user.png')} label="Monitor / curso" style={estilos.icono} />
            </View>

            <View style={estilos.descripcion}>
              <Text style={estilos.texto}>
                Solicito permiso para realizar cambios en la información y contenido de mi curso, ya que necesito actualizar algunos datos antes de continuar ofreciéndolo a los usuarios.
              </Text>
            </View>

          </>
        } />

        <Card style={{ padding: 12 }} contenido={

          <>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={estilos.texto}>Apelación por bloqueo injustificado</Text>
                <Text style={estilos.texto}>Tipo: Apelación de bloqueo</Text>
                <Text style={estilos.texto}>Descripción:</Text>
              </View>

              <Img src={require('../assets/user.png')} label="Identificación" style={estilos.icono} />
            </View>

            <View style={estilos.descripcion}>
              <Text style={estilos.texto}>
                Mi cuenta fue bloqueada y considero que se trató de un error, ya que no realicé ninguna actividad que incumpliera las normas de la plataforma. Solicito que mi caso sea revisado y se reconsidere el bloqueo.
              </Text>
            </View>

          </>
        } />

        <Card style={{ padding: 12 }} contenido={

          <>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={estilos.texto}>Solicitud por créditos no recibidos</Text>
                <Text style={estilos.texto}>Tipo: Problema con créditos</Text>
                <Text style={estilos.texto}>Descripción:</Text>
              </View>

              <Img src={require('../assets/user.png')} label="Tarjetas de crédito" style={estilos.icono} />
            </View>

            <View style={estilos.descripcion}>
              <Text style={estilos.texto}>
                Completé las horas correspondientes, pero los créditos obtenidos no aparecen en mi cuenta. Solicito que se revise mi registro y se actualice mi saldo de créditos.
              </Text>
            </View>

          </>
        } />

        <Card style={{ padding: 12 }} contenido={

          <>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={estilos.texto}>Solicitud para cambiar información de perfil</Text>
                <Text style={estilos.texto}>Tipo: Modificación de perfil</Text>
                <Text style={estilos.texto}>Descripción:</Text>
              </View>

              <Img                 src={require('../assets/user.png')}
 label="Perfil" style={estilos.icono} />
            </View>

            <View style={estilos.descripcion}>
              <Text style={estilos.texto}>
                Solicito realizar un cambio en la información de mi perfil, ya que algunos datos actualmente registrados son incorrectos o necesitan actualizarse.
              </Text>
            </View>

          </>
        } />

      </>

    } />
  );
}

const estilos = StyleSheet.create({

  texto: {
    fontSize: 10,
    color: '#333333',
    marginTop: 2
  },

  descripcion: {
    borderLeftWidth: 2,
    borderLeftColor: '#BBBBBB',
    paddingLeft: 8,
    marginTop: 4
  },

  icono: {
    width: 52,
    height: 52,
    borderRadius: 10
  }

});