import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

const menuItems = [
  {
    id: '1',
    category: 'Brigadeiros Premium',
    items: [
      { name: '50 unid', price: 'R$ 165' },
      { name: '100 unid', price: 'R$ 285' },
      { name: 'Nozes' },
      { name: 'Kinder' },
      { name: 'Caramelo com flor de sal' },
      { name: 'Cream cheese' },
      { name: 'Maracujá com chocolate nobre' },
      { name: 'Tiramisu (café com cream cheese e cacau)' },
      { name: 'Brownie (ninho com pedaços de brownie)' },
      { name: 'Churros' },
      { name: 'Café' },
      { name: 'Pistache' },
      { name: 'Ferrero' },
      { name: 'Chocolate nobre' },
      { name: 'Chocolate branco' },
      { name: 'Ninho com Nutella' },
      { name: 'Ninho (colorido)' },
    ]
  },
  {
    id: '2',
    category: 'Sabores',
    items: [
      { name: 'Escolha 1 sabor de massa e até 2 recheios' }
    ]
  },
  {
    id: '3',
    category: 'Bolo',
    items: [
      { name: '12 fatias', price: 'R$ 170' },
      { name: '25 fatias', price: 'R$ 265' },
      { name: '40 fatias', price: 'R$ 385' },
    ]
  },
  {
    id: '4',
    category: 'Massas',
    items: [
      { name: 'Ninho' },
      { name: 'Ninho com morangos' },
      { name: 'Ninho com geleia artesanal de morango' },
      { name: 'Ninho com Nutella' },
      { name: 'Brigadeiro 50% cacau' },
      { name: 'Brigadeiro 50% cacau com caramelo' },
      { name: 'Salgado' },
    ]
  },
  {
    id: '5',
    category: 'Recheios',
    items: [
      { name: 'Paçoca' },
      { name: 'Pistache' },
      { name: 'Nozes' },
      { name: 'Doce de leite' },
      { name: 'Coco' },
      { name: 'Ferrero' },
      { name: 'Cream cheese' },
    ]
  },
  {
    id: '6',
    category: 'Kit Festa',
    items: [
      { name: 'Só um bolinho: 1 bolo 12 fatias, 30 brigadeiros clássicos, 10 mini brownies ou 10 bombons', price: 'R$ 275' },
      { name: 'Festão: 1 bolo 25 fatias, 60 brigadeiros clássicos ou Premium, 20 mini brownies ou 20 bombons', price: 'R$ 485' },
    ]
  },
];

export default function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Nosso Menu 🍰</Text>
      {menuItems.map(section => (
        <View key={section.id} style={styles.section}>
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
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  section: { marginBottom: 25 },
  category: { fontSize: 20, fontWeight: 'bold', color: '#f08080', marginBottom: 10 },
  card: { backgroundColor: '#f8f8f8', padding: 10, borderRadius: 10, marginBottom: 8 },
  name: { fontSize: 16 },
  price: { fontSize: 16, fontWeight: 'bold', color: '#f08080', marginTop: 3 }
});