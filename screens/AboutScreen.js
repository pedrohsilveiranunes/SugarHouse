import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Sobre Nós 🍰</Text>

      <Text style={styles.paragraph}>
        Em 2020, uma nova estrela brilhava no cenário da confeitaria de Belo Horizonte, Minas Gerais. 
        Esse brilho vinha de uma pequena, mas encantadora, confeitaria chamada Sugar House, criada por 
        Júlia Ludimila Siqueira Silva. A história da Sugar House é uma ode à paixão e ao talento por doces 
        que Júlia nutre desde a infância.
      </Text>

      <Text style={styles.paragraph}>
        Júlia sempre teve um amor especial pela arte de confeitar, um talento que ela desenvolveu e 
        aperfeiçoou ao longo dos anos. Seus primeiros passos na confeitaria foram dados na cozinha de sua 
        casa, onde experimentava receitas, misturava ingredientes e criava sobremesas que encantavam 
        amigos e familiares. A sua paixão se transformou em uma missão: compartilhar sua arte com o mundo 
        e fazer com que cada pessoa experimentasse a mesma alegria que ela sentia ao criar.
      </Text>

      <Text style={styles.paragraph}>
        A ideia de abrir uma confeitaria surgiu quando Júlia decidiu transformar sua paixão em um negócio. 
        Em meio à pandemia, quando muitos sonhos estavam sendo adiados, Júlia encontrou uma oportunidade 
        de trazer um pouco de doçura e alegria para a vida das pessoas. Assim nasceu a Sugar House, 
        um refúgio doce no coração de Belo Horizonte.
      </Text>

      <Text style={styles.paragraph}>
        A Sugar House não é apenas um lugar onde se vendem bolos e doces; é um espaço onde a arte e a 
        paixão se encontram. Cada receita é uma obra-prima, cada bolo é uma criação única que reflete a 
        dedicação e o cuidado de Júlia.
      </Text>

      <Text style={styles.paragraph}>
        O que realmente torna a Sugar House especial é a conexão pessoal que Júlia estabelece com seus clientes. 
        Ela acredita que cada doce tem uma história e adora ouvir as histórias e ocasiões que seus 
        clientes comemoram.
      </Text>

      <Text style={styles.paragraph}>
        Em cada bolinho, em cada torta e em cada detalhe da Sugar House, a história de Júlia Ludimila 
        Siqueira Silva continua a ser contada – uma história de sonho, determinação e, acima de tudo, 
        uma profunda paixão pela arte de confeitar.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#f08080'
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    lineHeight: 24
  }
});