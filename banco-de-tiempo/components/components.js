
import React from 'react';

import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';

// Imagen
export function Img({ src, label, style }) {
  if (src) {
    return (
      <Image
        source={src}
        style={style}
        resizeMode="contain"
      />
    );
  }

  return (
    <View style={[s.imagenVacia, style]}>
      <Text style={s.textoImagen}>{label}</Text>
    </View>
  );
}

// Marco de cada pantalla
export function Screen({ contenido, header = true }) {
  return (
    <View style={s.pantalla}>

      <View style={s.estado}>
        <Text style={s.hora}>11:07</Text>
      </View>

      {header && (
        <View style={s.encabezado}>

          {/* Tres rayitas sin interactividad */}
          <View>
            <View style={s.barra} />
            <View style={s.barra} />
            <View style={s.barra} />
          </View>

          {/* Imagen de perfil sin interactividad */}
          <Img
            src={require('../assets/user.png')}
            label="Perfil"
            style={{
              width: 44,
              height: 44,
              borderRadius: 22
            }}
          />

        </View>
      )}

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: 22,
          paddingBottom: 24
        }}
      >
        {contenido}
      </ScrollView>

      <View style={s.bandaInferior}>
        <View style={s.lineaInferior} />
      </View>

    </View>
  );
}

// Títulos
export const Title = ({ contenido }) => (
  <Text style={s.titulo}>{contenido}</Text>
);

export const Sub = ({ contenido }) => (
  <Text style={s.subtitulo}>{contenido}</Text>
);

// Tarjeta
export const Card = ({ contenido, style }) => (
  <View style={[s.tarjeta, style]}>
    {contenido}
  </View>
);

// Categorías
export const Categorias = ({ items }) => (
  <View style={s.categorias}>
    {items.map((t) => (
      <View key={t} style={s.categoria}>
        <Text style={s.textoCategoria}>{t}</Text>
      </View>
    ))}
  </View>
);

// Barra de búsqueda
export const SearchBar = ({ placeholder }) => (
  <View style={s.busqueda}>

    <TextInput
      style={s.textoBusqueda}
      placeholder={placeholder}
      placeholderTextColor="#999"
    />

    <Img
      src={require('../assets/buscar.png')}
      style={{
        width: 22,
        height: 22,
        margin: 8
      }}
    />

  </View>
);

// Gráfica de barras
export const BarChart = ({ data, ticks, max }) => (
  <Card contenido={
    <View style={{ padding: 12 }}>

      <View style={{ flexDirection: 'row', height: 150 }}>

        <View style={{ justifyContent: 'space-between', marginRight: 6 }}>
          {ticks.map((t) => (
            <Text key={t} style={s.textoGrafica}>{t}</Text>
          ))}
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between'
        }}>
          {data.map(([l, v]) => (
            <View
              key={l}
              style={{
                width: '17%',
                alignItems: 'center',
                justifyContent: 'flex-end',
                height: '100%'
              }}
            >
              <View
                style={{
                  width: '100%',
                  height: (v / max) * 150,
                  backgroundColor: '#5B9CF6',
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                }}
              />
            </View>
          ))}
        </View>

      </View>

      <View style={{
        flexDirection: 'row',
        marginLeft: 26,
        justifyContent: 'space-between',
        marginTop: 4
      }}>
        {data.map(([l]) => (
          <Text
            key={l}
            style={[s.textoGrafica, {
              width: '17%',
              textAlign: 'center'
            }]}
          >
            {l}
          </Text>
        ))}
      </View>

    </View>
  } />
);

// Componentes que se pueden importar
export {
  View,
  Text,
  TextInput
};

// Estilos
const s = StyleSheet.create({

  pantalla: {
    flex: 1,
    backgroundColor: '#FFF1DC'
  },

  estado: {
    height: 34,
    backgroundColor: '#FFDDB8',
    justifyContent: 'center',
    paddingHorizontal: 18
  },

  hora: {
    fontSize: 11,
    color: '#222'
  },

  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 14
  },

  barra: {
    width: 38,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF7F00',
    marginVertical: 3
  },

  bandaInferior: {
    height: 40,
    backgroundColor: '#FFDDB8',
    alignItems: 'center',
    justifyContent: 'center'
  },

  lineaInferior: {
    width: 110,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#222'
  },

  titulo: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FF7F00',
    marginTop: 8,
    marginBottom: 8
  },

  subtitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111111',
    marginBottom: 10
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F3D9B8',
    marginBottom: 14
  },

  categorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 12
  },

  categoria: {
    backgroundColor: '#FF7F00',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 16
  },

  textoCategoria: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13
  },

  busqueda: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#F3D9B8',
    paddingLeft: 16,
    marginBottom: 14
  },

  textoBusqueda: {
    flex: 1,
    height: 40,
    fontSize: 13,
    color: '#111111'
  },

  textoGrafica: {
    fontSize: 8,
    color: '#666'
  },

  imagenVacia: {
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#FF7F00',
    backgroundColor: 'rgba(255,127,0,0.08)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textoImagen: {
    fontSize: 9,
    color: '#FF7F00',
    textAlign: 'center',
    fontWeight: '600'
  }

});
