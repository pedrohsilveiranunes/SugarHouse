import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const menuItems = [
  {
    id: '1',
    category: 'Brigadeiros Premium',
    image: require('../assets/brigadeiros.jpeg'),
    items: [
      { name: '50 unid', price: 'R$ 165' },
      { name: '100 unid', price: 'R$ 285' },
      { name: 'Nozes' },
      { name: 'Kinder' },
      { name: 'Caramelo com flor de sal' },
      { name: 'Cream cheese' },
      { name: 'Maracujá com chocolate nobre' },
    ],
  },
  {
    id: '2',
    category: 'Bolo',
    image: require('../assets/bolo.jpeg'),
    items: [
      { name: '12 fatias', price: 'R$ 170' },
      { name: '25 fatias', price: 'R$ 265' },
      { name: '40 fatias', price: 'R$ 385' },
    ],
  },
  {
    id: '3',
    category: 'Kit Festa',
    items: [
      { name: 'Só um bolinho: 1 bolo 12 fatias, 30 brigadeiros clássicos, 10 mini brownies ou 10 bombons', price: 'R$ 275' },
      { name: 'Festão: 1 bolo 25 fatias, 60 brigadeiros clássicos ou Premium, 20 mini brownies ou 20 bombons', price: 'R$ 485' },
    ],
  },
];

export default function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Nosso Menu 🍰</Text>
      {menuItems.map(section => (
        <View key={section.id} style={styles.section}>
          {section.image && (
            <Image
              source={section.image}
              style={styles.image}
              resizeMode="contain"
            />
          )}
          <Text style={styles.category}>{section.category}</Text>
          {section.items.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              {item.price && <Text style={styles.price}>{item.price}</Text>}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 15, paddingTop: 15 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, color: '#f08080' },
  section: { marginBottom: 20 },
  category: { fontSize: 18, fontWeight: 'bold', color: '#f08080', marginBottom: 8, textAlign: 'center' },
  image: { width: '100%', height: 100, borderRadius: 8, marginBottom: 8 },
  card: { backgroundColor: '#fff0f0', padding: 8, borderRadius: 8, marginBottom: 5 },
  name: { fontSize: 14, color: '#333' },
  price: { fontSize: 14, fontWeight: 'bold', color: '#f08080', marginTop: 2 },
});