import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Sugar House 🍰</Text>
      <Text style={styles.subtitle}>Deixando seus dias mais doces!</Text>
      <Text style={styles.location}>Belo Horizonte, MG</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.buttonText}>Ver Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>Sobre Nós</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, color: '#555', marginBottom: 5 },
  location: { fontSize: 16, color: '#777', marginBottom: 30 },
  button: { backgroundColor: '#f08080', padding: 15, borderRadius: 10, marginVertical: 10, width: '60%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18 }
});