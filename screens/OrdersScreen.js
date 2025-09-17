import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

export default function OrdersScreen() {
  const whatsappNumber = '5531971230711'; 
  const whatsappMessage = 'Olá! Gostaria de fazer uma encomenda na Sugar House.';

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Como Encomendar 🍰</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Retirada na loja</Text>
        <Text style={styles.text}>
          Você pode retirar sua encomenda diretamente no bairro Anchieta em Belo Horizonte, MG. 
          Entre em contato para agendar o horário.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Pedido via WhatsApp</Text>
        <Text style={styles.text}>
          Também é possível fazer seu pedido pelo WhatsApp. Clique no botão abaixo para abrir uma conversa.
        </Text>
        <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
          <Text style={styles.buttonText}>Fazer Pedido</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f08080',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f08080',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});