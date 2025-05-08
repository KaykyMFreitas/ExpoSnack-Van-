import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

const InicalResponsavel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Nome do Responsável</Text>
      <View style={styles.rowContainer}>
        <Image
          style={styles.imagem}
          source={require('../../../imgs/Imagem_Responsavel.png')}
        />
        <View style={styles.columnContainer}>
          <Text>Nome</Text>
          <Text>CPF</Text>
          <Text>Telefone</Text>
        </View>
      </View>
      <Button color="black">Cadastrar uma criança</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'flex-start'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: 110,
    height: 110,
    borderRadius: 10,
    marginRight: 16,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  columnContainer: {
    flexDirection: 'column',
    gap: 10,
  },
});

export default InicalResponsavel;
