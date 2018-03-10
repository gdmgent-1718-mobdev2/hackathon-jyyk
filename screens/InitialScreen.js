import React, { Component } from 'react';
import { View } from 'react-native';
import { StretchedButton } from '../components/StretchedButton';
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
          <StretchedButton onPress={() => this.props.navigation.navigate('Login')}  text='Inloggen' color='#D5DDDE'/>
          <StretchedButton onPress={() => this.props.navigation.navigate('Register')}  text='Registreren' color='#3C5148'/>
        </View>
      </View>
    );
  }
}
//added navigation to registerscreen: onPress={() => this.props.navigation.navigate('Register')}