import React, { Component } from 'react';
import { View } from 'react-native';
import { StretchedButtonLogIn } from '../components/StretchedButtonLogIn';
import { StretchedButtonRegister } from '../components/StretchedButtonRegister';
import { Logo } from '../components/Logo';
import { styles } from '../components/Stylesheet'; 

export default class InitialScreen extends Component{

  render() {
    return (
      <View style={styles.containerInitial}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.buttons}>
          <StretchedButtonLogIn onPress={() => this.props.navigation.navigate('Login')}  text='Inloggen'  />
          <StretchedButtonRegister onPress={() => this.props.navigation.navigate('Register')}  text='Registreren' />
        </View>
      </View>
    );
  }
}
//added navigation to registerscreen: onPress={() => this.props.navigation.navigate('Register')}