import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import Input from '../components/Input'
import ButtonCustom from '../components/ButtonCustom'

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");    

  return (
    <View style={styles.container}>
      <Image
      style={styles.tinyLogo}
      source={require('../../imgs/Logo.png')}
      />
      <Text style={styles.text}>FAÇA SEU LOGIN t</Text>

      <Input
        label= "Email"
      />
      <Input
        label= "Senha"
      />
      <ButtonCustom 
        title="Entrar"
        onPress={() => console.log('Botão Entrar pressionado')}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center',     
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
});

export default HomePage;
