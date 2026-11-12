
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {
  Screen,
  Title
} from '../components/components';

// COLORES
const NARANJA = '#F28C28';
const NARANJA_SUAVE = '#FDEBD6';
const GRIS = '#EEEEEE';
const TEXTO = '#333333';
const TEXTO_SUAVE = '#777777';

const PERIODO = 'Octubre 2026';

// DATOS DEL REPORTE
const RESUMEN = [
  ['Usuarios registrados', '1,284', '+8.2%'],
  ['Usuarios activos', '245', '+14%'],
  ['Inscripciones del mes', '412', '+12%'],
  ['Cursos publicados', '36', '+2'],
  ['Calificación promedio', '4.1', '-0.1'],
  ['Créditos otorgados', '18,450', '+6%']
];

const CURSOS = [
  ['Programación Web', '130', '4.7'],
  ['Diseño UX/UI', '90', '5.0'],
  ['Python', '70', '4.8'],
  ['Bases de Datos', '55', '4.6'],
  ['Java', '40', '4.5']
];

const USUARIOS = [
  ['Junio', '120'],
  ['Julio', '160'],
  ['Agosto', '190'],
  ['Septiembre', '215'],
  ['Octubre', '245']
];

const TIPOS_USUARIO = [
  ['Regular', '820'],
  ['Maestro', '164'],
  ['Nuevo', '300']
];

const MODERACION = [
  ['Reportes recibidos', '28'],
  ['Reportes resueltos', '24'],
  ['Solicitudes aprobadas', '18'],
  ['Solicitudes rechazadas', '6'],
  ['Usuarios suspendidos', '3']
];

// COMPONENTE PARA LAS SECCIONES
function Seccion({ titulo, descripcion, children }) {
  return (
    <View style={estilos.seccion}>

      <Text style={estilos.titulo}>
        {titulo}
      </Text>

      {descripcion ? (
        <Text style={estilos.descripcion}>
          {descripcion}
        </Text>
      ) : null}

      {children}

    </View>
  );
}

// COMPONENTE PARA LAS TABLAS
function Tabla({ columnas, datos }) {
  return (
    <View style={estilos.caja}>

      {/* ENCABEZADOS */}
      <View style={estilos.fila}>
        {columnas.map((columna, index) => (
          <Text
            key={index}
            style={[
              estilos.encabezado,
              index === 0
                ? { flex: 2 }
                : { flex: 1, textAlign: 'right' }
            ]}
          >
            {columna}
          </Text>
        ))}
      </View>

      {/* INFORMACIÓN */}
      {datos.map((fila, index) => (
        <View key={index} style={estilos.fila}>

          {fila.map((dato, posicion) => (
            <Text
              key={posicion}
              style={[
                estilos.celda,
                posicion === 0
                  ? { flex: 2 }
                  : { flex: 1, textAlign: 'right' }
              ]}
            >
              {dato}
            </Text>
          ))}

        </View>
      ))}

    </View>
  );
}

// PANTALLA PRINCIPAL
export default function ReportesGeneralesScreen({ cambiarPantalla }) {

  return (
    <Screen cambiarPantalla={cambiarPantalla} contenido={

      <>

<Title contenido="Gestión de información" />
        <Text style={estilos.periodo}>
          Periodo: {PERIODO}
        </Text>

        {/* RESUMEN GENERAL */}
        <Seccion titulo="Resumen general">

          <View style={estilos.contenedorTarjetas}>

            {RESUMEN.map((dato, index) => (
              <View key={index} style={estilos.tarjeta}>

                <Text style={estilos.etiqueta}>
                  {dato[0]}
                </Text>

                <Text style={estilos.valor}>
                  {dato[1]}
                </Text>

                <Text style={estilos.cambio}>
                  {dato[2]} respecto al mes anterior
                </Text>

              </View>
            ))}

          </View>

        </Seccion>

        {/* CURSOS MÁS POPULARES */}
        <Seccion
          titulo="Cursos más populares"
          descripcion="Cantidad de usuarios inscritos y calificación promedio."
        >

          <Tabla
            columnas={['Curso', 'Inscritos', 'Calificación']}
            datos={CURSOS}
          />

        </Seccion>

        {/* USUARIOS ACTIVOS */}
        <Seccion
          titulo="Usuarios activos por mes"
          descripcion="Cantidad de usuarios que utilizaron la plataforma."
        >

          <Tabla
            columnas={['Mes', 'Usuarios']}
            datos={USUARIOS}
          />

        </Seccion>

        {/* TIPOS DE USUARIO */}
        <Seccion titulo="Usuarios por tipo">

          <Tabla
            columnas={['Tipo de usuario', 'Cantidad']}
            datos={TIPOS_USUARIO}
          />

        </Seccion>

        {/* MODERACIÓN */}
        <Seccion
          titulo="Moderación"
          descripcion="Reportes y solicitudes atendidas."
        >

          <Tabla
            columnas={['Indicador', 'Cantidad']}
            datos={MODERACION}
          />

        </Seccion>

        {/* HALLAZGOS IMPORTANTES */}
        <Seccion titulo="Hallazgos importantes">

          <View style={estilos.hallazgo}>
            <Text style={estilos.textoHallazgo}>
              Los usuarios activos aumentaron durante octubre.
            </Text>
          </View>

          <View style={estilos.hallazgo}>
            <Text style={estilos.textoHallazgo}>
              Programación Web es el curso con mayor cantidad de inscritos.
            </Text>
          </View>

          <View style={estilos.hallazgo}>
            <Text style={estilos.textoHallazgo}>
              Diseño UX/UI cuenta con la mejor calificación promedio.
            </Text>
          </View>

          <View style={estilos.hallazgo}>
            <Text style={estilos.textoHallazgo}>
              Se resolvieron 24 de los 28 reportes recibidos.
            </Text>
          </View>

        </Seccion>

        {/* DESCARGAR REPORTES */}
        
{/* DESCARGAR REPORTES */}

<Seccion
  titulo="Descargar reportes"
  descripcion="Selecciona el formato y consulta la información que incluirá cada archivo."
>

  <View style={estilos.caja}>

    {/* PDF */}

    <View style={estilos.archivo}>

      <View style={estilos.informacionArchivo}>
        <Text style={estilos.nombreArchivo}>
          Reporte general.pdf
        </Text>

        <Text style={estilos.descripcionArchivo}>
          Incluye:
        </Text>

        <Text style={estilos.descripcionArchivo}>
          - Resumen general de la plataforma
        </Text>
        <Text style={estilos.descripcionArchivo}>
          - Usuarios registrados y activos
        </Text>
        <Text style={estilos.descripcionArchivo}>
          - Cursos más populares
        </Text>
        <Text style={estilos.descripcionArchivo}>
          - Moderación y hallazgos importantes
        </Text>
      </View>

      <TouchableOpacity style={estilos.boton}>
        <Text style={estilos.textoBoton}>
          Descargar PDF
        </Text>
      </TouchableOpacity>

    </View>

    {/* EXCEL */}

    <View style={estilos.archivo}>

      <View style={estilos.informacionArchivo}>
        <Text style={estilos.nombreArchivo}>
          Estadisticas_Plataforma.xlsx
        </Text>

        <Text style={estilos.descripcionArchivo}>
          Incluye:
        </Text>

        <Text style={estilos.descripcionArchivo}>
          - Hoja 1: Resumen general
        </Text>
        <Text style={estilos.descripcionArchivo}>
          - Hoja 2: Usuarios por tipo
        </Text>
        <Text style={estilos.descripcionArchivo}>
          - Hoja 3: Cursos e inscripciones
        </Text>
        <Text style={estilos.descripcionArchivo}>
          - Hoja 4: Usuarios activos por mes
        </Text>
        <Text style={estilos.descripcionArchivo}>
          - Hoja 5: Moderación
        </Text>
      </View>

      <TouchableOpacity style={estilos.boton}>
        <Text style={estilos.textoBoton}>
          Descargar Excel
        </Text>
      </TouchableOpacity>

    </View>

    {/* CSV */}

    <View style={estilos.archivo}>

      <View style={estilos.informacionArchivo}>
        <Text style={estilos.nombreArchivo}>
          Usuarios_Registrados.csv
        </Text>

        <Text style={estilos.descripcionArchivo}>
          Incluye:
        </Text>

        <Text style={estilos.descripcionArchivo}>
          - Nombre del usuario
        </Text>
        <Text style={estilos.descripcionArchivo}>
          - Tipo de usuario
        </Text>
        <Text style={estilos.descripcionArchivo}>
          - Estado de la cuenta
        </Text>
        <Text style={estilos.descripcionArchivo}>
          - Fecha de registro
        </Text>
      </View>

      <TouchableOpacity style={estilos.boton}>
        <Text style={estilos.textoBoton}>
          Descargar CSV
        </Text>
      </TouchableOpacity>

    </View>

    {/* TXT */}

    <View style={estilos.archivo}>

      <View style={estilos.informacionArchivo}>
        <Text style={estilos.nombreArchivo}>
          Resumen_Moderacion.txt
        </Text>

        <Text style={estilos.descripcionArchivo}>
          Incluye:
        </Text>

        <Text style={estilos.descripcionArchivo}>
          - Reportes recibidos y resueltos
        </Text>
        <Text style={estilos.descripcionArchivo}>
          - Solicitudes aprobadas y rechazadas
        </Text>
        <Text style={estilos.descripcionArchivo}>
          - Usuarios suspendidos
        </Text>
      </View>

      <TouchableOpacity style={estilos.boton}>
        <Text style={estilos.textoBoton}>
          Descargar TXT
        </Text>
      </TouchableOpacity>

    </View>

  </View>

</Seccion>

        <View style={{ height: 20 }} />

      </>

    } />

  );
}

// ESTILOS
const estilos = StyleSheet.create({

  // GENERAL
  periodo: {
    fontSize: 12,
    color: TEXTO_SUAVE,
    marginTop: 4
  },

  seccion: {
    marginTop: 18
  },

  titulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: TEXTO,
    marginBottom: 5
  },

  descripcion: {
    fontSize: 11,
    color: TEXTO_SUAVE,
    marginBottom: 10
  },

  // TARJETAS
  contenedorTarjetas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8
  },

  tarjeta: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    elevation: 2
  },

  etiqueta: {
    fontSize: 11,
    color: TEXTO_SUAVE
  },

  valor: {
    fontSize: 23,
    fontWeight: 'bold',
    color: TEXTO,
    marginVertical: 4
  },

  cambio: {
    fontSize: 10,
    color: NARANJA,
    fontWeight: 'bold'
  },

  // TABLAS
  caja: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    elevation: 2
  },

  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: GRIS
  },

  encabezado: {
    fontSize: 11,
    fontWeight: 'bold',
    color: NARANJA
  },

  celda: {
    fontSize: 12,
    color: TEXTO
  },

  // HALLAZGOS
  hallazgo: {
    backgroundColor: NARANJA_SUAVE,
    borderLeftWidth: 3,
    borderLeftColor: NARANJA,
    borderRadius: 6,
    padding: 12,
    marginTop: 8
  },

  textoHallazgo: {
    fontSize: 12,
    color: TEXTO
  },

  // DESCARGAS
  archivo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: GRIS
  },

  informacionArchivo: {
    flex: 1,
    marginRight: 10
  },

  nombreArchivo: {
    fontSize: 13,
    fontWeight: 'bold',
    color: TEXTO
  },

  descripcionArchivo: {
    fontSize: 10,
    color: TEXTO_SUAVE,
    marginTop: 4
  },

  boton: {
    backgroundColor: NARANJA,
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 7
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold'
  }

});
