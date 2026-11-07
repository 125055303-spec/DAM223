import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

export const C = {
  orange: '#FF7F00', bg: '#FFF1DC', band: '#FFDDB8', card: '#FFFFFF', line: '#F3D9B8',
  text: '#111111', blue: '#5B9CF6', green: '#2FB44F', red: '#E23B3B', soft: '#FFB066', star: '#F5B301',
};

// Cuando src = null muestra un recuadro; cuando pongas require('../assets/archivo.png') muestra la imagen.
export function Img({ src, label, style }) {
  if (src) return <Image source={src} style={style} resizeMode="contain" />;
  return (
    <View style={[s.ph, style]}>
      <Text style={s.phTxt}>{label}</Text>
    </View>
  );
}

// Marco de cada pantalla: barra de hora, botón de menú, perfil y contenido con scroll
export function Screen({ go, children, header = true }) {
  return (
    <View style={s.phone}>
      <View style={s.status}><Text style={s.time}>11:07</Text></View>
      {header && (
        <View style={s.header}>
          <TouchableOpacity onPress={() => go('Menu')}>
            <View style={s.bar} /><View style={s.bar} /><View style={s.bar} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => go('MiPerfil')}>
            {/* src: icono de perfil de usuario (arriba a la derecha) → require('../assets/perfil.png') */}
            <Img src={null} label="Perfil" style={{ width: 44, height: 44, borderRadius: 22 }} />
          </TouchableOpacity>
        </View>
      )}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 22, paddingBottom: 24 }}>
        {children}
      </ScrollView>
      <View style={s.navBand}><View style={s.navPill} /></View>
    </View>
  );
}

export const Title = ({ children }) => <Text style={s.title}>{children}</Text>;
export const Sub = ({ children }) => <Text style={s.sub}>{children}</Text>;

export const Card = ({ children, style }) => <View style={[s.card, style]}>{children}</View>;

export const Chips = ({ items }) => (
  <View style={s.chips}>
    {items.map((t) => (
      <TouchableOpacity key={t} style={s.chip}><Text style={s.chipTxt}>{t}</Text></TouchableOpacity>
    ))}
  </View>
);

export const SearchBar = ({ placeholder }) => (
  <View style={s.search}>
    <TextInput style={s.searchInput} placeholder={placeholder} placeholderTextColor="#999" />
    <TouchableOpacity style={s.searchBtn}>
      {/* src: icono de lupa (buscar) → require('../assets/lupa.png') */}
      <Img src={null} label="Lupa" style={{ width: 22, height: 22 }} />
    </TouchableOpacity>
  </View>
);

// Gráfica de barras sencilla (solo visual)
export const BarChart = ({ data, ticks, max }) => (
  <Card style={{ padding: 12 }}>
    <View style={{ flexDirection: 'row', height: 150 }}>
      <View style={{ justifyContent: 'space-between', marginRight: 6 }}>
        {ticks.map((t) => <Text key={t} style={s.tick}>{t}</Text>)}
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        {data.map(([l, v]) => (
          <View key={l} style={{ width: '17%', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
            <View style={{ width: '100%', height: (v / max) * 150, backgroundColor: C.blue, borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
          </View>
        ))}
      </View>
    </View>
    <View style={{ flexDirection: 'row', marginLeft: 26, justifyContent: 'space-between', marginTop: 4 }}>
      {data.map(([l]) => <Text key={l} style={[s.tick, { width: '17%', textAlign: 'center' }]}>{l}</Text>)}
    </View>
  </Card>
);

export { View, Text, TouchableOpacity, TextInput };

const s = StyleSheet.create({
  phone: { 
    flex: 1, 
    backgroundColor: C.bg 
  },
  status: {
     height: 34, 
     backgroundColor: C.band, 
     justifyContent: 'center', 
     paddingHorizontal: 18 
    },
  time: { 
    fontSize: 11, 
    color: '#222' 
  },
  header: {
     flexDirection: 'row', 
     justifyContent: 'space-between', 
     alignItems: 'center',
      paddingHorizontal: 22, 
      paddingVertical: 14 
    },
  bar: { 
    width: 38, 
    height: 6, 
    borderRadius: 3, 
    backgroundColor: C.orange,
     marginVertical: 3 
    },
  navBand: {
     height: 40,
      backgroundColor: C.band,
       alignItems: 'center', 
       justifyContent: 'center' 
      },
  navPill: {
     width: 110, 
     height: 4, 
     borderRadius: 2,
      backgroundColor: '#222'
     },
  title: { 
    fontSize: 30, 
    fontWeight: '700', 
    color: C.orange, 
    marginTop: 8,
     marginBottom: 8 
    },
  sub: { 
    fontSize: 14, 
    fontWeight: '600', 
    color: C.text,
     marginBottom: 10 
    },
  card: { 
    backgroundColor: C.card,
     borderRadius: 16, 
     padding: 16, 
     borderWidth: 1,
      borderColor: C.line,
       marginBottom: 14 
      },
  chips: {
     flexDirection: 'row', 
     flexWrap: 'wrap', 
     gap: 8, 
     marginVertical: 12
     },
  chip: { 
    backgroundColor: C.orange,
     borderRadius: 16, 
     paddingVertical: 6, 
     paddingHorizontal: 16 
    },
  chipTxt: { 
    color: '#fff', 
    fontWeight: '600',
     fontSize: 13 
    },
  search: { 
    flexDirection: 'row', 
    alignItems: 'center',
   backgroundColor: '#fff', 
   borderRadius: 24, 
   borderWidth: 1, 
   borderColor: C.line, 
   paddingLeft: 16,
    marginBottom: 14 
  },
  searchInput: { 
    flex: 1, 
    height: 40,
    fontSize: 13, 
    color: C.text, 
    outlineStyle: 'none'
   },
  searchBtn: {
     width: 36,
      height: 36,
       borderRadius: 18,
        backgroundColor: C.orange, 
        alignItems: 'center',
         justifyContent: 'center',
          margin: 3
         },
  tick: { 
    fontSize: 8, 
    color: '#666' 
  },
  ph: {
     borderWidth: 1.5,
      borderStyle: 'dashed',
      borderColor: C.orange, 
      backgroundColor: 'rgba(255,127,0,0.08)',
       alignItems: 'center', 
       justifyContent: 'center' },
  phTxt: {
     fontSize: 9, 
     color: C.orange, 
     textAlign: 'center',
      fontWeight: '600' 
    },
});