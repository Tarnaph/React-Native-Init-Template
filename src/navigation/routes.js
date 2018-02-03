/* React */
import React from 'react';

/* Navigation */
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

/* Components */
import Footer from 'navigation/components/footer';
import Header from 'navigation/components/header';

/* Pages */
import Home from 'pages/home';

const Routes = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: props => <Header {...props} defaultTitle="RN Default by Tarnaph" />,
    },
  },
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

export default Routes;
