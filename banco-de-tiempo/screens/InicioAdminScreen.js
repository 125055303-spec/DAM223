import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Screen,
  Title
} from '../components/components';

/* ---------- Paleta (se conserva la original) ---------- */
const NARANJA = '#F28C28';
const NARANJA_SUAVE = '#FDEBD6';
const GRIS = '#EEEEEE';
const TEXTO = '#222222';
const TEXTO_SUAVE = '#777777';
const VERDE = '#2E9E5B';
const ROJO = '#D64545';

/* ---------- Datos (reemplaza por tu API / base de datos) ---------- */
const RESUMEN = [
  { etiqueta: 'Usuarios activos', valor: '1,284', cambio: '+8.2%', sube: true },
  { etiqueta: 'Cursos publicados', valor: '36', cambio: '+2', sube: true },
  { etiqueta: 'Inscripciones (mes)', valor: '412', cambio: '+12%', sube: true },
  { etiqueta: 'Calificación promedio', valor: '4.1', cambio: '-0.1', sube: false }
];

const MEJORES = [
  ['Diseño UX/UI', 5],
  ['Python', 4.8],
  ['Programación Web', 4.7],
  ['Bases de Datos', 4.6],
  ['Java', 4.5]
];

const PEORES = [
  ['Intro a C++', 2.8],
  ['Matemáticas Bás.', 3],
  ['Redes Informáticas', 3.2],
  ['Fundamentos de I.', 3.4],
  ['Ofimática', 3.6]
];

const DISTRIBUCION = [
  ['5 estrellas', 46],
  ['4 estrellas', 28],
  ['3 estrellas', 14],
  ['2 estrellas', 8],
  ['1 estrella', 4]
];

const MAS_INSCRITOS = [
  ['Python', 184],
  ['Programación Web', 156],
  ['Diseño UX/UI', 131]
];

const PENDIENTES = [
  { texto: 'Cursos esperando aprobación', cantidad: 5 },
  { texto: 'Reseñas reportadas', cantidad: 3 },
  { texto: 'Instructores por verificar', cantidad: 2 }
];

const ACTIVIDAD = [
  { texto: 'Nuevo curso "Ciberseguridad 101" enviado a revisión', hora: 'Hace 12 min' },
  { texto: 'Ana Torres se inscribió en Python', hora: 'Hace 40 min' },
  { texto: 'Reseña de 2★ en Intro a C++', hora: 'Hace 1 h' },
  { texto: 'Luis Pérez completó Bases de Datos', hora: 'Hace 3 h' }
];

/* ---------- Componentes pequeños ---------- */
const sombra = {
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2
};

function Seccion({ titulo, accion, onAccion, children }) {
  return (
    <View style={{ marginTop: 18 }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
      }}>
        <Text style={{ fontWeight: '700', fontSize: 14, color: TEXTO }}>
          {titulo}
        </Text>
        {accion ? (
          <TouchableOpacity onPress={onAccion}>
            <Text style={{ fontSize: 12, color: NARANJA, fontWeight: '700' }}>
              {accion}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
      {children}
    </View>
  );
}

function Tarjeta({ children, style }) {
  return (
    <View style={[{
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      padding: 14
    }, sombra, style]}>
      {children}
    </View>
  );
}

function Barra({ etiqueta, valor, maximo = 5, sufijo = '' }) {
  return (
    <View style={{ marginBottom: 10 }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3
      }}>
        <Text style={{ fontSize: 13, color: TEXTO }}>{etiqueta}</Text>
        <Text style={{ fontSize: 13, fontWeight: '700', color: TEXTO }}>
          {valor}{sufijo}
        </Text>
      </View>
      <View style={{ height: 12, backgroundColor: GRIS, borderRadius: 6 }}>
        <View style={{
          height: 12,
          width: `${(valor / maximo) * 100}%`,
          backgroundColor: NARANJA,
          borderRadius: 6
        }} />
      </View>
    </View>
  );
}

/* ---------- Pantalla ---------- */
export default function InicioAdminScreen({ cambiarPantalla }) {

  const promedioMejores = (
    MEJORES.reduce((suma, c) => suma + c[1], 0) / MEJORES.length
  ).toFixed(1);

  const totalPendientes = PENDIENTES.reduce((suma, p) => suma + p.cantidad, 0);

  return (
    <Screen cambiarPantalla={cambiarPantalla} contenido={

      <>

        {/* Encabezado */}
        <View style={{ alignItems: 'center', marginBottom: 15 }}>
          <Image
            source={require('../assets/user.png')}
            style={{ width: 110, height: 110, borderRadius: 55 }}
            resizeMode="contain"
          />
        </View>

        <Title contenido={'¡Bienvenido\nAdministrador!'} />

        {/* Resumen rápido */}
        <Seccion titulo="Resumen general">
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
            {RESUMEN.map((dato, i) => (
              <Tarjeta key={i} style={{ width: '48%', marginBottom: 10 }}>
                <Text style={{ fontSize: 12, color: TEXTO_SUAVE }}>
                  {dato.etiqueta}
                </Text>
                <Text style={{
                  fontSize: 26,
                  fontWeight: '800',
                  color: TEXTO,
                  marginVertical: 4
                }}>
                  {dato.valor}
                </Text>
                <Text style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color: dato.sube ? VERDE : ROJO
                }}>
                  {dato.sube ? '▲' : '▼'} {dato.cambio} vs. mes anterior
                </Text>
              </Tarjeta>
            ))}
          </View>
        </Seccion>

        {/* Pendientes por atender */}
        <Seccion titulo="Pendientes por atender">
          <Tarjeta style={{ backgroundColor: NARANJA_SUAVE }}>
            <Text style={{ fontSize: 13, color: TEXTO, marginBottom: 8 }}>
              Tienes{' '}
              <Text style={{ fontWeight: '800', color: NARANJA }}>
                {totalPendientes} tareas
              </Text>{' '}
              que requieren tu atención.
            </Text>

            {PENDIENTES.map((p, i) => (
              <View key={i} style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 7,
                borderTopWidth: i === 0 ? 0 : 1,
                borderTopColor: '#F5D3AB'
              }}>
                <Text style={{ fontSize: 13, color: TEXTO, flex: 1 }}>
                  {p.texto}
                </Text>
                <View style={{
                  minWidth: 26,
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  borderRadius: 10,
                  backgroundColor: NARANJA,
                  alignItems: 'center'
                }}>
                  <Text style={{ color: '#FFF', fontWeight: '700', fontSize: 12 }}>
                    {p.cantidad}
                  </Text>
                </View>
              </View>
            ))}
          </Tarjeta>
        </Seccion>

        {/* Mejor valorados */}
        <Seccion titulo="Cursos MEJOR valorados">
          <Tarjeta>
            <Text style={{ fontSize: 12, color: TEXTO_SUAVE, marginBottom: 10 }}>
              Promedio del top 5: {promedioMejores} de 5
            </Text>
            {MEJORES.map((curso, i) => (
              <Barra key={i} etiqueta={curso[0]} valor={curso[1]} />
            ))}
          </Tarjeta>
        </Seccion>

        {/* Peor valorados */}
        <Seccion titulo="Cursos PEOR valorados">
          <Tarjeta>
            <Text style={{ fontSize: 12, color: ROJO, marginBottom: 10 }}>
              Estos cursos necesitan revisión de contenido.
            </Text>
            {PEORES.map((curso, i) => (
              <Barra key={i} etiqueta={curso[0]} valor={curso[1]} />
            ))}
          </Tarjeta>
        </Seccion>

        {/* Distribución de calificaciones */}
        <Seccion titulo="Distribución de calificaciones">
          <Tarjeta>
            {DISTRIBUCION.map((fila, i) => (
              <Barra
                key={i}
                etiqueta={fila[0]}
                valor={fila[1]}
                maximo={100}
                sufijo="%"
              />
            ))}
          </Tarjeta>
        </Seccion>

        {/* Cursos con más inscritos */}
        <Seccion titulo="Cursos con más inscritos">
          <Tarjeta>
            {MAS_INSCRITOS.map((curso, i) => (
              <View key={i} style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
                borderTopWidth: i === 0 ? 0 : 1,
                borderTopColor: GRIS
              }}>
                <View style={{
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  backgroundColor: NARANJA_SUAVE,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10
                }}>
                  <Text style={{ color: NARANJA, fontWeight: '800' }}>
                    {i + 1}
                  </Text>
                </View>
                <Text style={{ flex: 1, fontSize: 13, color: TEXTO }}>
                  {curso[0]}
                </Text>
                <Text style={{ fontSize: 13, fontWeight: '700', color: TEXTO }}>
                  {curso[1]} alumnos
                </Text>
              </View>
            ))}
          </Tarjeta>
        </Seccion>

        {/* Actividad reciente */}
        <Seccion titulo="Actividad reciente">
          <Tarjeta>
            {ACTIVIDAD.map((item, i) => (
              <View key={i} style={{
                flexDirection: 'row',
                paddingVertical: 8,
                borderTopWidth: i === 0 ? 0 : 1,
                borderTopColor: GRIS
              }}>
                <View style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: NARANJA,
                  marginTop: 5,
                  marginRight: 10
                }} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 13, color: TEXTO }}>{item.texto}</Text>
                  <Text style={{ fontSize: 11, color: TEXTO_SUAVE, marginTop: 2 }}>
                    {item.hora}
                  </Text>
                </View>
              </View>
            ))}
          </Tarjeta>
        </Seccion>

        <View style={{ height: 20 }} />

      </>

    } />
  );
}