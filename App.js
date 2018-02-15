import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import WalletScreen from './screens/WalletScreen';
import ProfileScreen from './screens/ProfileScreen';

const Navigator = TabNavigator({
  Wallet: { screen: WalletScreen },
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
})

Navigator.navigationOptions = {
  title: "Test Tab",
}

export default Navigator;
