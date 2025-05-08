import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import ButtonCustom from '../../components/ButtonCustom';
import Header from '../../components/Header';

import { salvarDados, carregarDados } from '../../BancoDeDados/Storage';

const CadastrarResponsavel = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigation = useNavigation();

  const handleSalvar = () => {
    if (!nome || !email || !dataNascimento || !cpf || !telefone) {
      console.warn('⚠️ Preencha todos os campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn('❌ E-mail inválido.');
      return;
    }

    if (!/^\d+$/.test(cpf)) {
      console.warn('❌ CPF deve conter apenas números.');
      return;
    }

    if (!/^\d+$/.test(telefone)) {
      console.warn('❌ Telefone deve conter apenas números.');
      return;
    }

    const novoResponsavel = { nome, email, senha, dataNascimento, cpf, telefone };
    salvarDados(novoResponsavel);
    navigation.navigate('Login');
  };

  const handleCarregar = async () => {
    const dados = await carregarDados();
    console.log(dados);
  };

  return (
    <SafeAreaView>
      <Header goBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../../../imgs/Logo.png')}
        />
        <Text style={styles.text}>Cadastrar-se</Text>

        <Input label="Nome" value={nome} onChangeText={setNome} />
        <Input label="Email" value={email} onChangeText={setEmail} />
        <Input label="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
        <Input label="Data de Nascimento" value={dataNascimento} onChangeText={setDataNascimento}/>
        <Input label="CPF" value={cpf} onChangeText={setCpf} />
        <Input label="Telefone" value={telefone} onChangeText={setTelefone} />

        <ButtonCustom title="Entrar" onPress={handleSalvar} />
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

export default CadastrarResponsavel;
