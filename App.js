import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { initializeFirebase, logout, checkLoggedIn } from './utils/firebaseService';
import ignoreWarnings from 'react-native-ignore-warnings';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import InitialScreen from './screens/InitialScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import WalletScreen from './screens/WalletScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';

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
  Register: { screen: RegisterScreen }, //added this line to register
})

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null  };
  }

  handleLogin(user) {
    this.setState({
      currentUser: user,
    });
    console.log(user);
  }

  handleLogout() {
    this.setState({
      currentUser: null,
    });
    logout();
  }

  componentWillMount() {
    ignoreWarnings('Setting a timer');
    initializeFirebase();
    setTimeout(() => this.setState({
      currentUser: checkLoggedIn(),
    }), 1000);
  }

  render() {
    console.log(this.state.currentUser);
    
    const { currentUser } = this.state;
      if (this.state.currentUser !== null) {
        return <AppNavigator screenProps={{currentUser, logout: () => this.handleLogout()}} />
      } else {
        return <AuthNavigator screenProps={{login: (user) => this.handleLogin(user) }}/>
      }
  }
}
