import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { initializeFirebase } from './utils/firebaseService';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import InitialScreen from './screens/InitialScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import WalletScreen from './screens/WalletScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppNavigator = TabNavigator({
  Wallet: { screen: WalletScreen },
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  initialRouteName : 'Home',
})

const AuthNavigator = StackNavigator({
  Initial: { screen: InitialScreen},
  Login: { screen: LoginScreen},
})


export default class App extends Component {

  componentWillMount() {
    initializeFirebase();
  }

  componentDidMount() {

  }

  render() {
    const authenticated = false;
    return (
      authenticated ? <AppNavigator /> : <AuthNavigator />
    );
  }
}
