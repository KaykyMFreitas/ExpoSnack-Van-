import AsyncStorage from '@react-native-async-storage/async-storage';

export const salvarDados = async (novoResponsavel) => {
  try {
    const jsonExistente = await AsyncStorage.getItem('responsaveis');
    const listaResponsaveis = jsonExistente ? JSON.parse(jsonExistente) : [];

    listaResponsaveis.push(novoResponsavel);

    await AsyncStorage.setItem('responsaveis', JSON.stringify(listaResponsaveis));
    console.log('Novo responsável salvo:', novoResponsavel);
  } catch (e) {
    console.error('Erro ao salvar os dados', e);
  }
};

export const carregarDados = async () => {
  try {
    const json = await AsyncStorage.getItem('responsaveis');
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Erro ao carregar os dados', e);
    return [];
  }
};

export const apagarDados = async () => {
  try {
    await AsyncStorage.removeItem('responsaveis');
    console.log('Dados apagados com sucesso!');
  } catch (e) {
    console.error('Erro ao apagar os dados', e);
  }
};

