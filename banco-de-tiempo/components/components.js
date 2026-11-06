import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C, shadow } from '../theme';

export const Screen = ({ children, header = true, scroll = true }) => {
  const Body = scroll ? ScrollView : View;
  return (
    <View style={s.root}>
      <View style={s.status}><Text style={s.time}>11:07</Text><Ionicons name="wifi" size={14} color={C.text} /></View>
      <Body style={{ flex: 1 }} contentContainerStyle={{ padding: 22, paddingBottom: 40 }}>
        {header && (
          <View style={s.header}>
            <Ionicons name="menu" size={46} color={C.orange} />
            <Ionicons name="person-circle-outline" size={52} color={C.orange} />
          </View>
        )}
        {children}
      </Body>
      <View style={s.footer}><View style={s.handle} /></View>
    </View>
  );
};

export const Title = ({ children, sub }) => (
  <View style={{ marginBottom: 14 }}>
    <Text style={s.title}>{children}</Text>
    {sub ? <Text style={s.sub}>{sub}</Text> : null}
  </View>
);

export const Chips = ({ items, active }) => (
  <View style={s.chips}>
    {items.map((t) => (
      <View key={t} style={[s.chip, active === t && s.chipActive]}><Text style={s.chipTxt}>{t}</Text></View>
    ))}
  </View>
);

export const Search = ({ placeholder }) => (
  <View style={[s.search, shadow]}>
    <TextInput style={{ flex: 1, color: C.text }} placeholder={placeholder} placeholderTextColor="#B9B9B9" editable={false} />
    <View style={s.searchBtn}><Ionicons name="search" size={22} color={C.white} /></View>
  </View>
);

export const Card = ({ children, style }) => <View style={[s.card, shadow, style]}>{children}</View>;

export const Stars = ({ n }) => (
  <View style={{ flexDirection: 'row' }}>
    {[1, 2, 3, 4].map((i) => <Ionicons key={i} name={i <= n ? 'star' : 'star-outline'} size={22} color="#FFB800" />)}
  </View>
);

export const BarChart = ({ data, max, height = 150 }) => (
  <Card style={{ padding: 14 }}>
    <View style={{ flexDirection: 'row', alignItems: 'flex-end', height, justifyContent: 'space-between' }}>
      {data.map(([label, v]) => (
        <View key={label} style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ width: '78%', height: (v / max) * height, backgroundColor: C.chart, borderRadius: 8 }} />
        </View>
      ))}
    </View>
    <View style={{ flexDirection: 'row', marginTop: 6 }}>
      {data.map(([label]) => <Text key={label} numberOfLines={1} style={s.axis}>{label}</Text>)}
    </View>
  </Card>
);

export const LineChart = ({ values, labels, w = 250, h = 110 }) => {
  const min = Math.min(...values), max = Math.max(...values), dx = w / (values.length - 1);
  const pts = values.map((v, i) => ({ x: i * dx, y: h - ((v - min) / (max - min)) * h }));
  return (
    <Card style={{ padding: 18 }}>
      <View style={{ width: w, height: h, alignSelf: 'center', marginVertical: 8 }}>
        {pts.slice(1).map((p, i) => {
          const a = pts[i], len = Math.hypot(p.x - a.x, p.y - a.y), ang = Math.atan2(p.y - a.y, p.x - a.x);
          return <View key={i} style={{ position: 'absolute', left: (a.x + p.x) / 2 - len / 2, top: (a.y + p.y) / 2, width: len, height: 2, backgroundColor: C.chart, transform: [{ rotate: `${ang}rad` }] }} />;
        })}
        {pts.map((p, i) => <View key={i} style={{ position: 'absolute', left: p.x - 3, top: p.y - 3, width: 7, height: 7, borderRadius: 4, backgroundColor: C.chart }} />)}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {labels.map((l) => <Text key={l} style={s.axis}>{l}</Text>)}
      </View>
    </Card>
  );
};

export const OrangeButton = ({ label }) => (
  <TouchableOpacity activeOpacity={1} style={s.btn}><Text style={s.btnTxt}>{label}</Text></TouchableOpacity>
);

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  status: { height: 34, backgroundColor: C.bar, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 18 },
  time: { fontSize: 12, fontWeight: '600', color: C.text },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 },
  title: { fontSize: 30, color: C.orange, fontWeight: '500' },
  sub: { fontSize: 15, color: C.text, fontWeight: '500', marginTop: 4 },
  chips: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  chip: { backgroundColor: C.orange, paddingVertical: 7, paddingHorizontal: 16, borderRadius: 16 },
  chipActive: { borderWidth: 2, borderColor: '#C75F00' },
  chipTxt: { color: C.white, fontWeight: '600', fontSize: 13 },
  search: { flexDirection: 'row', alignItems: 'center', backgroundColor: C.white, borderRadius: 28, paddingLeft: 18, paddingRight: 6, height: 52, marginBottom: 20 },
  searchBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: C.orange, alignItems: 'center', justifyContent: 'center' },
  card: { backgroundColor: C.white, borderRadius: 22, padding: 16, marginBottom: 18 },
  axis: { flex: 1, fontSize: 9, color: '#777', textAlign: 'center' },
  btn: { backgroundColor: C.orange, borderRadius: 30, paddingVertical: 16, alignItems: 'center' },
  btnTxt: { color: C.white, fontSize: 18, fontWeight: '600' },
  footer: { height: 44, backgroundColor: C.bar, alignItems: 'center', justifyContent: 'center' },
  handle: { width: 110, height: 4, borderRadius: 2, backgroundColor: C.text },
});