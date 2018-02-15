import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { StretchedButtonLogIn } from '../components/StretchedButtonLogIn';
import { StretchedButtonRegister } from '../components/StretchedButtonRegister';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B8E4E',
    flexDirection: 'column',
  },
  image: {
    flex: 0,
    width: 250,
    height: 170
  },
  logo: {
    flex: 3,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    padding: 50
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'barlow-condensed-regular'
  }
});

export default class InitialScreen extends Component{

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.image}
            source={require('../assets/images/logo.png')}
          />
        </View>
        <View style={styles.buttons}>
          <StretchedButtonLogIn onPress={() => this.props.navigation.navigate('Login')} family='barlow' text='Inloggen'  style='inloggen'/>
          <StretchedButtonRegister onPress={() => this.props.navigation.navigate('Register')} family='barlow' text='Registreren' style='registreren'/>
        </View>
      </View>
    );
  }
}
//added navigation to registerscreen: onPress={() => this.props.navigation.navigate('Register')}