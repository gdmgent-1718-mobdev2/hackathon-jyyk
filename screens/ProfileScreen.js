import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from '../components/Submit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  button: {
    flex: 1,
    flexDirection: 'column-reverse',
  }
});

class ProfileScreen extends Component{
  render() {
    const { logout } = this.props.screenProps;
    return (
      <ImageBackground
        source={require('../assets/images/visuals/profile.png')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}
      >

      <View style={styles.button}>
        <Button onPress={() => logout()} title="Afmelden" />
      </View>

      </ImageBackground>
      
    );
  }
}

export default ProfileScreen;