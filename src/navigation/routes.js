import { StackNavigator, TabNavigator } from 'react-navigation';

import Footer from 'navigation/components/footer';
import Home from 'pages/home';

const homeRoutes = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Go Native Store',
      headerTitleStyle: {
        color: '#FF9696',
      },
      headerStyle: {
        backgroundColor: '#FFFF',
      },
    },
  },
});

const Routes = TabNavigator({
  Home: { screen: homeRoutes },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  lazy: false,
  tabBarPosition: 'bottom',
  tabBarComponent: Footer,
});

export default Routes;
