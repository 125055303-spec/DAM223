import React from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';

import {
  Screen,
  Title,
  Categorias,
  Card,
  Img
} from '../components/components';

/* ---------- Paleta ---------- */
const NARANJA = '#F28C28';
const NARANJA_SUAVE = '#FDEBD6';
const GRIS = '#EEEEEE';
const TEXTO = '#333333';
const TEXTO_SUAVE = '#777777';
const VERDE = '#4CAF50';
const ROJO = '#F44336';

/* ---------- Datos de ejemplo (reemplaza por tu API / BD) ---------- */
const RESUMEN = [
  ['Pendientes', 4],
  ['Resueltos esta semana', 12],
  ['Total del mes', 28]
];

const MOTIVOS = [
  ['Contenido inapropiado', 9],
  ['Spam en comentarios', 7],
  ['Acoso a otros usuarios', 5],
  ['Plagio de contenido', 4],
  ['Otros', 3]
];

const REPORTES = [
  {
    numero: 24,
    reportado: 'Carlos Torres',
    reportadoPor: 'Ashley López',
    fecha: '02/10/2026',
    antiguedad: 'Hace 2 días',
    motivo: 'Contenido inapropiado',
    prioridad: 'Alta',
    estado: 'Pendiente',
    curso: 'Introducción a la Fotografía',
    reportesPrevios: 2,
    descripcion:
      'Quiero reportar esta cuenta porque encontré contenido dentro de uno de sus cursos que considero inapropiado y que no debería estar disponible en la plataforma. Solicito que se revise el contenido y la cuenta.'
  },
  {
    numero: 25,
    reportado: 'Sofía Ramírez',
    reportadoPor: 'Carlos Jimenez',
    fecha: '02/10/2026',
    antiguedad: 'Hace 2 días',
    motivo: 'Spam en comentarios',
    prioridad: 'Media',
    estado: 'En revisión',
    curso: 'Python para principiantes',
    reportesPrevios: 0,
    descripcion:
      'Quiero reportar a este usuario debido a que ha realizado varios comentarios repetitivos que parecen ser spam. Esto dificulta la interacción dentro de los cursos y afecta la experiencia de otros usuarios.'
  },
  {
    numero: 26,
    reportado: 'Miguel Ángel Ruiz',
    reportadoPor: 'Valeria Hernández',
    fecha: '01/10/2026',
    antiguedad: 'Hace 3 días',
    motivo: 'Plagio de contenido',
    prioridad: 'Baja',
    estado: 'Pendiente',
    curso: 'Diseño UX/UI desde cero',
    reportesPrevios: 1,
    descripcion:
      'El material de este curso es una copia casi idéntica de uno de mis cursos publicados el año pasado. Adjunto las fechas de publicación para que se pueda comparar.'
  }
];

/* ---------- Colores según prioridad y estado ---------- */
const COLOR_PRIORIDAD = {
  Alta: { texto: ROJO, fondo: '#FDE3E1' },
  Media: { texto: NARANJA, fondo: NARANJA_SUAVE },
  Baja: { texto: TEXTO_SUAVE, fondo: GRIS }
};

const COLOR_ESTADO = {
  Pendiente: { texto: NARANJA, fondo: NARANJA_SUAVE },
  'En revisión': { texto: '#555555', fondo: GRIS }
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

function Dato({ etiqueta, valor, destacado }) {
  return (
    <Text style={destacado ? estilos.textoNaranja : estilos.texto}>
      <Text style={{ fontWeight: '700' }}>{etiqueta}: </Text>
      {valor}
    </Text>
  );
}

/* ---------- Pantalla ---------- */
export default function ReportesScreen({ cambiarPantalla }) {

  const maximoMotivo = Math.max(...MOTIVOS.map((m) => m[1]));

  return (
    <Screen cambiarPantalla={cambiarPantalla} contenido={

      <>

        <Title contenido="Reportes" />

        {/* Resumen */}
        <View style={estilos.resumen}>
          {RESUMEN.map((dato, i) => (
            <View key={i} style={estilos.resumenItem}>
              <Text style={estilos.resumenValor}>{dato[1]}</Text>
              <Text style={estilos.resumenEtiqueta}>{dato[0]}</Text>
            </View>
          ))}
        </View>

        {/* Motivos más frecuentes */}
        <Text style={estilos.seccion}>Motivos más frecuentes</Text>

        <Card contenido={

          <View style={{ padding: 12 }}>
            {MOTIVOS.map((motivo, i) => (
              <View key={i} style={{ marginBottom: i === MOTIVOS.length - 1 ? 0 : 10 }}>

                <View style={estilos.filaMotivo}>
                  <Text style={estilos.texto}>{motivo[0]}</Text>
                  <Text style={[estilos.texto, { fontWeight: '700' }]}>
                    {motivo[1]}
                  </Text>
                </View>

                <View style={estilos.barraFondo}>
                  <View style={[
                    estilos.barra,
                    { width: `${(motivo[1] / maximoMotivo) * 100}%` }
                  ]} />
                </View>

              </View>
            ))}
          </View>

        } />

        {/* Lista de reportes */}
        <Text style={estilos.seccion}>Reportes por revisar</Text>

        <Categorias items={['Recientes', 'Esta semana', 'Más antiguos']} />

        {REPORTES.map((r) => (
          <Card key={r.numero} contenido={

            <View style={{ padding: 12 }}>

              <View style={estilos.encabezado}>

                <Img
                  src={require('../assets/bell.png')}
                  label="Campana"
                  style={estilos.icono}
                />

                <Text style={estilos.numero}>Reporte #{r.numero}</Text>

                <Pressable style={[estilos.boton, { backgroundColor: VERDE }]}>
                  <Text style={estilos.textoBoton}>✓</Text>
                </Pressable>

                <Pressable style={[estilos.boton, { backgroundColor: ROJO, marginLeft: 6 }]}>
                  <Text style={estilos.textoBoton}>✕</Text>
                </Pressable>

              </View>

              {/* Estado y prioridad */}
              <View style={estilos.insignias}>
                <Insignia texto={r.estado} colores={COLOR_ESTADO[r.estado]} />
                <Insignia
                  texto={`Prioridad ${r.prioridad}`}
                  colores={COLOR_PRIORIDAD[r.prioridad]}
                />
                <Text style={estilos.antiguedad}>{r.antiguedad}</Text>
              </View>

              <Dato etiqueta="Usuario reportado" valor={r.reportado} destacado />
              <Dato etiqueta="Reportado por" valor={r.reportadoPor} />
              <Dato etiqueta="Fecha" valor={r.fecha} />
              <Dato etiqueta="Curso relacionado" valor={r.curso} />
              <Dato etiqueta="Motivo" valor={r.motivo} destacado />

              <Text style={[estilos.texto, { marginTop: 8, fontWeight: '700' }]}>
                Descripción:
              </Text>

              <Text style={estilos.texto}>{r.descripcion}</Text>

              {/* Historial del usuario reportado */}
              <View style={estilos.historial}>
                <Text style={estilos.historialTexto}>
                  {r.reportesPrevios === 0
                    ? 'Este usuario no tiene reportes anteriores.'
                    : `Este usuario tiene ${r.reportesPrevios} ${r.reportesPrevios === 1 ? 'reporte anterior' : 'reportes anteriores'}.`}
                </Text>
              </View>

            </View>

          } />
        ))}

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
    paddingHorizontal: 4,
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
    fontSize: 10,
    color: TEXTO_SUAVE,
    textAlign: 'center'
  },

  seccion: {
    fontWeight: '700',
    fontSize: 14,
    color: TEXTO,
    marginTop: 14,
    marginBottom: 8
  },

  /* Motivos */
  filaMotivo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3
  },

  barraFondo: {
    height: 10,
    borderRadius: 5,
    backgroundColor: GRIS
  },

  barra: {
    height: 10,
    borderRadius: 5,
    backgroundColor: NARANJA
  },

  /* Tarjeta de reporte */
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  icono: {
    width: 28,
    height: 28
  },

  numero: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    color: TEXTO
  },

  boton: {
    width: 24,
    height: 24,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textoBoton: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14
  },

  insignias: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 8,
    marginBottom: 4
  },

  insignia: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: 6
  },

  insigniaTexto: {
    fontSize: 10,
    fontWeight: '700'
  },

  antiguedad: {
    fontSize: 10,
    color: TEXTO_SUAVE,
    marginLeft: 2
  },

  textoNaranja: {
    fontSize: 10,
    color: NARANJA,
    marginTop: 3
  },

  texto: {
    fontSize: 10,
    color: TEXTO,
    marginTop: 2
  },

  historial: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: GRIS
  },

  historialTexto: {
    fontSize: 10,
    color: TEXTO_SUAVE
  }

});