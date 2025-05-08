import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Input from '../components/Input';
import ButtonCustom from '../components/ButtonCustom';
import { carregarDados } from '../BancoDeDados/Storage';

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    const dados = await carregarDados();

    const usuario = dados.find(
      (item) => item.email === email && item.senha === senha
    );

    if (usuario) {
      console.log('✅ Login bem-sucedido:', usuario.nome);
      navigation.navigate('HomeResponsavel');
    } else {
      console.warn('Erro', 'E-mail ou senha incorretos');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../../imgs/Logo.png')}
        />
        <Text style={styles.text}>FAÇA SEU LOGIN</Text>

        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <ButtonCustom
          title="Entrar"
          
           onPress={() => navigation.navigate('HomeResponsavel')}
        />
        <Button color="black" onPress={() => navigation.navigate('Cadastrar')}>
          Cadastre-se
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
});

export default Login;