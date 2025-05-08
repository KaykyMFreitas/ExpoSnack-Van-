import React, {useState} from 'react';
import { BottomNavigation, Text,  } from 'react-native-paper';

import InicalResponsavel from './Responsavel/InicialResponsavel'

const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'inicialResponsavel', title: 'Inicio', icon: 'home'}
  ]);

  const renderScene = BottomNavigation.SceneMap({
    inicialResponsavel: InicalResponsavel ,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;