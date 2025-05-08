import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login'
import Cadastrar from '../pages/Cadastrar'
import CadastrarResponsavel from '../pages/Responsavel/CadastrarResponsavel'
import HomeResponsavel from '../pages/Home'
const Stack = createNativeStackNavigator()

const Main = () => {
  return (
     <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          header:()=> null
        }}
      />
      <Stack.Screen 
        name="Cadastrar" 
        component={Cadastrar}
        options={{
          header:()=> null
        }}
      />
      <Stack.Screen 
        name="CadastrarResponsavel" 
        component={CadastrarResponsavel}
        options={{
          header:()=> null
        }}
      />
      <Stack.Screen 
        name="HomeResponsavel" 
        component={HomeResponsavel}
        options={{
          header:()=> null
        }}
      />
      </Stack.Navigator>
  )
}

export default Main
