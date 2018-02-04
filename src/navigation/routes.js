/* React */
import React from 'react';
import { Platform, Animated, Easing } from 'react-native';

/* Navigation */
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

/* Components */
import Footer from 'navigation/components/footer';
import Header from 'navigation/components/header';

/* Pages */
import Home from 'pages/home';
import Menu from 'navigation/components/header/modal/menu';
import Page1 from 'pages/page1';


const Routes = StackNavigator({
  Home: { screen: Home },
  Page1: { screen: Page1 },
}, {
  initialRouteName: 'Home',
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
  navigationOptions: {
    header: props => <Header {...props} defaultTitle="RN Default by Tarnaph" />,
  },
  transitionConfig : () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
  }),
});

const Rotas = DrawerNavigator({
  Home: {
    screen: Routes,
  },
  Page1: {
    screen: Routes,
  },
}, {
  contentComponent: props => <Menu {...props} />,
  drawerWidth: 300,
});


// const Routes = TabNavigator({
//   Home: { screen: homeRoutes },
// }, {
//   swipeEnabled: false,
//   animationEnabled: false,
//   lazy: false,
//   tabBarPosition: 'bottom',
//   tabBarComponent: Footer,
// });

export default Rotas;
