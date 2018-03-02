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
import EditProfileScreen from './screens/EditProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import CameraScreen from './screens/CameraScreen';
import ScanInfoScreen from './screens/ScanInfoScreen';

const HomeNavigator = StackNavigator(
  {
  Home: { screen: HomeScreen },
  Camera: { screen : CameraScreen },
  ScanInfo: { screen : ScanInfoScreen }
  }
);

const ProfileNavigator = StackNavigator(
  {
  Profile: { screen: ProfileScreen },
  EditProfile: { screen : EditProfileScreen },
  }
);

const AppNavigator = TabNavigator({
  Wallet: { screen: WalletScreen },
  Home: { screen: HomeNavigator },
  Profile: { screen: ProfileNavigator },
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  initialRouteName : 'Home',
  tabBarOptions: {
    labelStyle: {
      fontSize: 20,
      padding: 10,
    }
  }
});

const AuthNavigator = StackNavigator({
  Initial: { 
    screen: InitialScreen,
    navigationOptions: ({navigation}) => ({
      header: null,
    })
  },
  Login: { screen: LoginScreen},
  Register: { screen: RegisterScreen }, //added this line to register
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null  };
  }

  handleUpdate(user) {
    this.setState({
      currentUser: user,
    });
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
    checkLoggedIn(user => {
      if (user) {
        this.setState({
          currentUser: user,
        });
      } else {
        this.setState({
          currentUser: null,
        });
      }
    });
  }

  render() {    
    const { currentUser } = this.state;
      if (this.state.currentUser !== null) {
        return <AppNavigator screenProps= {
          {
            currentUser,
            logout: () => this.handleLogout(),
            update: (user) => this.handleUpdate(user)
          }
        } />
      } else {
        return <AuthNavigator screenProps={{login: (user) => this.handleUpdate(user) }}/>
      }
  }
}
