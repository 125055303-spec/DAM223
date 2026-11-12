
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';

import {
  Screen,
  Title,
  SearchBar,
  Card,
  Img
} from '../components/components';

/* COLORES */
const NARANJA = '#F28C28';
const NARANJA_SUAVE = '#FDEBD6';
const GRIS = '#EEEEEE';
const TEXTO = '#333333';
const TEXTO_SUAVE = '#777777';
const VERDE = '#2E9E5B';
const ROJO = '#D64545';

/* DATOS DE LOS USUARIOS */
export const USUARIOS_INICIALES = [
  {
    id: 1,
    nombre: 'Ashley López',
    correo: 'ashley.lopez@gmail.com',
    rol: 'Regular',
    estrellas: 5,
    inscripciones: 5,
    cursosCreados: 2,
    creditos: 200,
    estado: 'Activo',
    registro: '02/10/2021'
  },
  {
    id: 2,
    nombre: 'Valeria Hernández',
    correo: 'valeria.hrz@gmail.com',
    rol: 'Maestro',
    estrellas: 5,
    inscripciones: 10,
    cursosCreados: 15,
    creditos: 450,
    estado: 'Activo',
    registro: '02/10/2019'
  },
  {
    id: 3,
    nombre: 'Daniel Martínez',
    correo: 'danEler2019@gmail.com',
    rol: 'Nuevo',
    estrellas: 3,
    inscripciones: 3,
    cursosCreados: 1,
    creditos: 50,
    estado: 'Activo',
    registro: '02/10/2026'
  }
];

const FILTROS = [
  'Todos',
  'Regular',
  'Maestro',
  'Nuevo',
  'Suspendidos'
];

/* ESTRELLAS */
const estrellasTexto = (n) => {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
};

/* INSIGNIAS */
function Insignia({ texto, color, fondo }) {
  return (
    <View style={[estilos.insignia, { backgroundColor: fondo }]}>
      <Text style={[estilos.insigniaTexto, { color }]}>
        {texto}
      </Text>
    </View>
  );
}

/* BOTONES */
function Boton({ texto, onPress, color = NARANJA, relleno = false }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        estilos.boton,
        {
          borderColor: color,
          backgroundColor: relleno ? color : '#FFFFFF'
        }
      ]}
    >
      <Text
        style={[
          estilos.botonTexto,
          { color: relleno ? '#FFFFFF' : color }
        ]}
      >
        {texto}
      </Text>
    </TouchableOpacity>
  );
}

/* PANTALLA DE USUARIOS */
export default function UsuariosScreen({
  cambiarPantalla,
  usuarios,
  setUsuarios,
  abrirUsuario
}) {
  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('Todos');

  /* BUSCAR Y FILTRAR */
  const visibles = usuarios.filter((u) => {

    const texto = busquedaTexto();

    const coincideTexto =
      texto === '' ||
      u.nombre.toLowerCase().includes(texto) ||
      u.correo.toLowerCase().includes(texto);

    const coincideFiltro =
      filtro === 'Todos' ||
      (
        filtro === 'Suspendidos'
          ? u.estado === 'Suspendido'
          : u.rol === filtro
      );

    return coincideTexto && coincideFiltro;
  });

  function busquedaTexto() {
    return busqueda.trim().toLowerCase();
  }

  const total = usuarios.length;

  const activos = usuarios.filter(
    (u) => u.estado === 'Activo'
  ).length;

  const maestros = usuarios.filter(
    (u) => u.rol === 'Maestro'
  ).length;

  /* SUSPENDER O REACTIVAR */
  const cambiarEstado = (usuario) => {

    const nuevo = usuario.estado === 'Activo'
      ? 'Suspendido'
      : 'Activo';

    const verbo = nuevo === 'Suspendido'
      ? 'suspender'
      : 'reactivar';

    Alert.alert(
      `¿Quieres ${verbo} a ${usuario.nombre}?`,
      nuevo === 'Suspendido'
        ? 'No podrá iniciar sesión hasta que lo reactives.'
        : 'Podrá volver a iniciar sesión.',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: verbo.charAt(0).toUpperCase() + verbo.slice(1),
          onPress: () => {
            setUsuarios((lista) =>
              lista.map((u) =>
                u.id === usuario.id
                  ? { ...u, estado: nuevo }
                  : u
              )
            );
          }
        }
      ]
    );
  };

  /* ELIMINAR */
  const eliminar = (usuario) => {

    Alert.alert(
      `¿Eliminar a ${usuario.nombre}?`,
      'Esta acción no se puede deshacer. Se borrará su cuenta y sus datos.',
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
          }
        }
      ]
    );
  };

  return (
    <Screen contenido={

      <>

        <Title contenido="Gestionar Usuarios" />

        {/* RESUMEN */}

        <View style={estilos.resumen}>

          {[
            ['Total', total],
            ['Activos', activos],
            ['Maestros', maestros]
          ].map((dato, i) => (

            <View key={i} style={estilos.resumenItem}>
              <Text style={estilos.resumenValor}>
                {dato[1]}
              </Text>

              <Text style={estilos.resumenEtiqueta}>
                {dato[0]}
              </Text>
            </View>

          ))}

        </View>

        {/* BUSCADOR */}

        <SearchBar
          placeholder="Buscar por nombre o correo"
          value={busqueda}
          onChangeText={setBusqueda}
        />

        {/* FILTROS */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 8 }}
        >

          {FILTROS.map((f) => {

            const activo = f === filtro;

            return (
              <TouchableOpacity
                key={f}
                onPress={() => setFiltro(f)}
                style={[
                  estilos.chip,
                  activo && {
                    backgroundColor: NARANJA,
                    borderColor: NARANJA
                  }
                ]}
              >
                <Text
                  style={[
                    estilos.chipTexto,
                    activo && { color: '#FFFFFF' }
                  ]}
                >
                  {f}
                </Text>
              </TouchableOpacity>
            );
          })}

        </ScrollView>

        <Text style={estilos.contador}>
          {visibles.length} {visibles.length === 1 ? 'usuario' : 'usuarios'}
        </Text>

        {/* LISTA VACÍA */}

        {visibles.length === 0 && (

          <Card
            style={{ padding: 20 }}
            contenido={
              <Text style={estilos.vacio}>
                No hay usuarios que coincidan con tu búsqueda.
                Prueba con otro nombre o cambia el filtro.
              </Text>
            }
          />

        )}

        {/* TARJETAS DE USUARIOS */}

        {visibles.map((u) => {

          const suspendido = u.estado === 'Suspendido';

          return (

            <Card
              key={u.id}
              style={{ padding: 12 }}
              contenido={

                <>

                  <View style={estilos.encabezado}>

                    <Text style={estilos.correoIcono}>
                      ✉
                    </Text>

                    <Text
                      style={estilos.correoTexto}
                      numberOfLines={1}
                    >
                      {u.correo}
                    </Text>

                    <Text style={estilos.estrellas}>
                      {estrellasTexto(u.estrellas)}
                    </Text>

                  </View>

                  <View
                    style={[
                      estilos.usuario,
                      suspendido && { opacity: 0.6 }
                    ]}
                  >

                    <View style={estilos.foto}>

                      <Img
                        src={require('../assets/user.png')}
                        label="Foto usuario"
                        style={estilos.imagen}
                      />

                      <Text style={estilos.nombre}>
                        {u.nombre}
                      </Text>

                    </View>

                    <View style={estilos.informacion}>

                      <View style={estilos.insignias}>

                        <Insignia
                          texto={`Usuario ${u.rol}`}
                          color={NARANJA}
                          fondo={NARANJA_SUAVE}
                        />

                        <Insignia
                          texto={u.estado}
                          color={suspendido ? ROJO : VERDE}
                          fondo={suspendido ? '#FBE3E3' : '#DDF3E6'}
                        />

                      </View>

                      <Text style={estilos.dato}>
                        Inscripciones: {u.inscripciones}
                      </Text>

                      <Text style={estilos.dato}>
                        Cursos creados: {u.cursosCreados}
                      </Text>

                      <Text style={estilos.dato}>
                        Créditos: {u.creditos}
                      </Text>

                      <Text style={estilos.dato}>
                        Fecha de registro: {u.registro}
                      </Text>

                    </View>

                  </View>

                  {/* ACCIONES */}

                  <View style={estilos.acciones}>

                    <Boton
                      texto="Ver perfil"
                      relleno
                      onPress={() => abrirUsuario(u)}
                    />

                    <Boton
                      texto={suspendido ? 'Reactivar' : 'Suspender'}
                      color={suspendido ? VERDE : TEXTO_SUAVE}
                      onPress={() => cambiarEstado(u)}
                    />

                    <Boton
                      texto="Eliminar"
                      color={ROJO}
                      onPress={() => eliminar(u)}
                    />

                  </View>

                </>
              }
            />

          );
        })}

        <View style={{ height: 20 }} />

      </>

    } />
  );
}

const estilos = StyleSheet.create({

  /* RESUMEN */

  resumen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },

  resumenItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 3,
    borderRadius: 10,
    backgroundColor: NARANJA_SUAVE
  },

  resumenValor: {
    fontSize: 20,
    fontWeight: '800',
    color: NARANJA
  },

  resumenEtiqueta: {
    fontSize: 11,
    color: TEXTO_SUAVE
  },

  /* FILTROS */

  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginRight: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: GRIS,
    backgroundColor: '#FFFFFF'
  },

  chipTexto: {
    fontSize: 12,
    color: TEXTO
  },

  contador: {
    fontSize: 11,
    color: TEXTO_SUAVE,
    marginBottom: 6
  },

  vacio: {
    fontSize: 12,
    color: TEXTO_SUAVE,
    textAlign: 'center'
  },

  /* TARJETA */

  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6
  },

  correoIcono: {
    fontSize: 12,
    color: TEXTO_SUAVE
  },

  correoTexto: {
    fontSize: 10,
    color: '#555555',
    marginLeft: 4,
    flex: 1
  },

  estrellas: {
    color: '#FFC107',
    fontSize: 20
  },

  usuario: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  foto: {
    alignItems: 'center',
    width: 96
  },

  imagen: {
    width: 70,
    height: 70,
    borderRadius: 35
  },

  nombre: {
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center',
    color: TEXTO
  },

  informacion: {
    flex: 1,
    marginLeft: 8
  },

  insignias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 4
  },

  insignia: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: 6,
    marginBottom: 2
  },

  insigniaTexto: {
    fontSize: 10,
    fontWeight: '700'
  },

  dato: {
    fontSize: 10,
    color: TEXTO,
    marginVertical: 1
  },

  /* BOTONES */

  acciones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: GRIS
  },

  boton: {
    flex: 1,
    marginHorizontal: 3,
    paddingVertical: 7,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center'
  },

  botonTexto: {
    fontSize: 11,
    fontWeight: '700'
  }

});
