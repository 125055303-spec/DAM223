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
  Card,
  Img
} from '../components/components';

/* ---------- Paleta ---------- */
const NARANJA = '#F28C28';
const NARANJA_SUAVE = '#FDEBD6';
const GRIS = '#EEEEEE';
const TEXTO = '#333333';
const TEXTO_SUAVE = '#777777';
const VERDE = '#2E9E5B';
const VERDE_SUAVE = '#DDF3E6';
const ROJO = '#D64545';
const ROJO_SUAVE = '#FBE3E3';

/* ---------- Datos de ejemplo (reemplaza por tu API / BD) ---------- */
const SOLICITUDES_INICIALES = [
  {
    id: 1,
    titulo: 'Solicitud para subir un curso',
    usuario: 'Ashley López',
    fecha: '02/10/2026',
    tipo: 'Publicación de curso',
    prioridad: 'Media',
    estado: 'Pendiente',
    icono: 'Monitor / curso',
    aprobar: 'Aprobar',
    rechazar: 'Rechazar',
    descripcion:
      'Quiero solicitar la publicación de mi curso en la plataforma. Ya agregué la información, descripción, contenido y material correspondiente, por lo que solicito que sea revisado y aprobado.'
  },
  {
    id: 2,
    titulo: 'Solicitud para editar un curso',
    usuario: 'Valeria Hernández',
    fecha: '02/10/2026',
    tipo: 'Modificación de curso',
    prioridad: 'Baja',
    estado: 'Pendiente',
    icono: 'Monitor / curso',
    aprobar: 'Aprobar',
    rechazar: 'Rechazar',
    descripcion:
      'Solicito permiso para realizar cambios en la información y contenido de mi curso, ya que necesito actualizar algunos datos antes de continuar ofreciéndolo a los usuarios.'
  },
  {
    id: 3,
    titulo: 'Apelación por bloqueo injustificado',
    usuario: 'Carlos Torres',
    fecha: '01/10/2026',
    tipo: 'Apelación de bloqueo',
    prioridad: 'Alta',
    estado: 'Pendiente',
    icono: 'Identificación',
    aprobar: 'Levantar bloqueo',
    rechazar: 'Mantener bloqueo',
    descripcion:
      'Mi cuenta fue bloqueada y considero que se trató de un error, ya que no realicé ninguna actividad que incumpliera las normas de la plataforma. Solicito que mi caso sea revisado y se reconsidere el bloqueo.'
  },
  {
    id: 4,
    titulo: 'Solicitud por créditos no recibidos',
    usuario: 'Daniel Martínez',
    fecha: '01/10/2026',
    tipo: 'Problema con créditos',
    prioridad: 'Alta',
    estado: 'Pendiente',
    icono: 'Tarjetas de crédito',
    aprobar: 'Acreditar',
    rechazar: 'Rechazar',
    descripcion:
      'Completé las horas correspondientes, pero los créditos obtenidos no aparecen en mi cuenta. Solicito que se revise mi registro y se actualice mi saldo de créditos.'
  },
  {
    id: 5,
    titulo: 'Solicitud para cambiar información de perfil',
    usuario: 'Sofía Ramírez',
    fecha: '30/09/2026',
    tipo: 'Modificación de perfil',
    prioridad: 'Baja',
    estado: 'Pendiente',
    icono: 'Perfil',
    aprobar: 'Aprobar',
    rechazar: 'Rechazar',
    descripcion:
      'Solicito realizar un cambio en la información de mi perfil, ya que algunos datos actualmente registrados son incorrectos o necesitan actualizarse.'
  }
];

const FILTROS = ['Todas', 'Pendientes', 'Aprobadas', 'Rechazadas'];

const COLOR_PRIORIDAD = {
  Alta: { texto: ROJO, fondo: ROJO_SUAVE },
  Media: { texto: NARANJA, fondo: NARANJA_SUAVE },
  Baja: { texto: TEXTO_SUAVE, fondo: GRIS }
};

const COLOR_ESTADO = {
  Pendiente: { texto: NARANJA, fondo: NARANJA_SUAVE },
  Aprobada: { texto: VERDE, fondo: VERDE_SUAVE },
  Rechazada: { texto: ROJO, fondo: ROJO_SUAVE }
};

/* ---------- Componentes pequeños ---------- */
function Insignia({ texto, colores }) {
  return (
    <View style={[estilos.insignia, { backgroundColor: colores.fondo }]}>
      <Text style={[estilos.insigniaTexto, { color: colores.texto }]}>
        {texto}
      </Text>
    </View>
  );
}

function Boton({ texto, onPress, color = NARANJA, relleno = false }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        estilos.boton,
        { borderColor: color, backgroundColor: relleno ? color : '#FFFFFF' }
      ]}
    >
      <Text style={[estilos.botonTexto, { color: relleno ? '#FFFFFF' : color }]}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
}

/* ---------- Pantalla ---------- */
export default function SolicitudesScreen({ cambiarPantalla }) {

  const [solicitudes, setSolicitudes] = useState(SOLICITUDES_INICIALES);
  const [filtro, setFiltro] = useState('Todas');

  const pendientes = solicitudes.filter((s) => s.estado === 'Pendiente').length;
  const aprobadas = solicitudes.filter((s) => s.estado === 'Aprobada').length;
  const rechazadas = solicitudes.filter((s) => s.estado === 'Rechazada').length;

  const visibles = solicitudes.filter((s) => {
    if (filtro === 'Todas') return true;
    if (filtro === 'Pendientes') return s.estado === 'Pendiente';
    if (filtro === 'Aprobadas') return s.estado === 'Aprobada';
    return s.estado === 'Rechazada';
  });

  /* Acciones */
  const resolver = (solicitud, nuevoEstado) => {
    const aprobando = nuevoEstado === 'Aprobada';
    const accion = aprobando ? solicitud.aprobar : solicitud.rechazar;

    Alert.alert(
      `¿${accion}?`,
      `${solicitud.titulo}\nUsuario: ${solicitud.usuario}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: accion,
          style: aprobando ? 'default' : 'destructive',
          onPress: () => {
            setSolicitudes((lista) =>
              lista.map((s) => (s.id === solicitud.id ? { ...s, estado: nuevoEstado } : s))
            );
          }
        }
      ]
    );
  };

  const deshacer = (solicitud) => {
    setSolicitudes((lista) =>
      lista.map((s) => (s.id === solicitud.id ? { ...s, estado: 'Pendiente' } : s))
    );
  };

  return (
    <Screen cambiarPantalla={cambiarPantalla} contenido={

      <>

        <Title contenido="Solicitudes" />

        {/* Resumen */}
        <View style={estilos.resumen}>
          {[
            ['Pendientes', pendientes, NARANJA, NARANJA_SUAVE],
            ['Aprobadas', aprobadas, VERDE, VERDE_SUAVE],
            ['Rechazadas', rechazadas, ROJO, ROJO_SUAVE]
          ].map((dato, i) => (
            <View key={i} style={[estilos.resumenItem, { backgroundColor: dato[3] }]}>
              <Text style={[estilos.resumenValor, { color: dato[2] }]}>{dato[1]}</Text>
              <Text style={estilos.resumenEtiqueta}>{dato[0]}</Text>
            </View>
          ))}
        </View>

        {/* Filtros */}
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
                  activo && { backgroundColor: NARANJA, borderColor: NARANJA }
                ]}
              >
                <Text style={[estilos.chipTexto, activo && { color: '#FFFFFF' }]}>
                  {f}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <Text style={estilos.contador}>
          {visibles.length} {visibles.length === 1 ? 'solicitud' : 'solicitudes'}
        </Text>

        {/* Estado vacío */}
        {visibles.length === 0 && (
          <Card style={{ padding: 20 }} contenido={
            <Text style={estilos.vacio}>
              No hay solicitudes en esta categoría.
            </Text>
          } />
        )}

        {/* Tarjetas de solicitud */}
        {visibles.map((s) => {
          const resuelta = s.estado !== 'Pendiente';

          return (
            <Card key={s.id} style={{ padding: 12 }} contenido={

              <>

                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>

                    <Text style={estilos.titulo}>{s.titulo}</Text>

                    <View style={estilos.insignias}>
                      <Insignia texto={s.estado} colores={COLOR_ESTADO[s.estado]} />
                      <Insignia
                        texto={`Prioridad ${s.prioridad}`}
                        colores={COLOR_PRIORIDAD[s.prioridad]}
                      />
                    </View>

                    <Text style={estilos.texto}>
                      <Text style={estilos.negrita}>Usuario: </Text>{s.usuario}
                    </Text>
                    <Text style={estilos.texto}>
                      <Text style={estilos.negrita}>Fecha: </Text>{s.fecha}
                    </Text>
                    <Text style={estilos.texto}>
                      <Text style={estilos.negrita}>Tipo: </Text>{s.tipo}
                    </Text>
                    <Text style={[estilos.texto, estilos.negrita]}>Descripción:</Text>

                  </View>

                  <Img
                    src={require('../assets/user.png')}
                    label={s.icono}
                    style={estilos.icono}
                  />
                </View>

                <View style={estilos.descripcion}>
                  <Text style={estilos.texto}>{s.descripcion}</Text>
                </View>

                {/* Acciones */}
                <View style={estilos.acciones}>
                  {resuelta ? (
                    <>
                      <Text style={[
                        estilos.resultado,
                        { color: s.estado === 'Aprobada' ? VERDE : ROJO }
                      ]}>
                        {s.estado === 'Aprobada'
                          ? `Resuelta: ${s.aprobar}`
                          : `Resuelta: ${s.rechazar}`}
                      </Text>
                      <Boton texto="Deshacer" color={TEXTO_SUAVE} onPress={() => deshacer(s)} />
                    </>
                  ) : (
                    <>
                      <Boton
                        texto={s.aprobar}
                        color={VERDE}
                        relleno
                        onPress={() => resolver(s, 'Aprobada')}
                      />
                      <Boton
                        texto={s.rechazar}
                        color={ROJO}
                        onPress={() => resolver(s, 'Rechazada')}
                      />
                      {/* Sin acción por ahora: cuando exista la pantalla, agrega onPress={() => cambiarPantalla('NombrePantalla')} */}
                      <Boton texto="Ver usuario" color={NARANJA} />
                    </>
                  )}
                </View>

              </>
            } />
          );
        })}

        <View style={{ height: 20 }} />

      </>

    } />
  );
}

const estilos = StyleSheet.create({

  /* Resumen */
  resumen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 6
  },

  resumenItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 3,
    borderRadius: 10
  },

  resumenValor: {
    fontSize: 20,
    fontWeight: '800'
  },

  resumenEtiqueta: {
    fontSize: 11,
    color: TEXTO_SUAVE
  },

  /* Filtros */
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

  /* Tarjeta */
  titulo: {
    fontSize: 13,
    fontWeight: '700',
    color: TEXTO
  },

  insignias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
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

  texto: {
    fontSize: 10,
    color: TEXTO,
    marginTop: 2
  },

  negrita: {
    fontWeight: '700'
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
  },

  /* Botones */
  acciones: {
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingHorizontal: 4,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center'
  },

  botonTexto: {
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center'
  },

  resultado: {
    flex: 1,
    fontSize: 11,
    fontWeight: '700',
    marginLeft: 3
  }

});