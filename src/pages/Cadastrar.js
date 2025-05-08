import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';

const Cadastrar = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header goBack={() => navigation.goBack()} />

      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../../imgs/Logo.png')}
        />

        <Text style={styles.text}>Cadastrar como:</Text>

        <Button onPress={() => navigation.navigate('CadastrarResponsavel')}>
          <Image
            style={styles.imagem}
            source={require('../../imgs/Imagem_Responsavel.png')}
          />
        </Button>
        <Text style={styles.text}>Responsável</Text>

        <Button onPress={() => console.log('Botão Transporte pressionado')}>
          <Image
            style={styles.imagem}
            source={require('../../imgs/Imagem_Motorista.png')}
          />
        </Button>
        <Text style={styles.text}>Transporte Escolar</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
    marginBottom: -30,
  },
  imagem: {
    width: 110,
    height: 110,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Cadastrar;