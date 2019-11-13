import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './src/views/Home';
import Cadastro from './src/views/Cadastro';
import Login from './src/views/Login';
import Interna from './src/views/Interna';

const Navegador = createStackNavigator({
  Home: {
    screen: Home,
  },
  Cadastro: {
    screen: Cadastro,
  },
  Login: {
    screen: Login,
  },
  Interna: {
    screen: Interna,
  }
});

const AppContainer = createAppContainer(Navegador);

export default AppContainer;