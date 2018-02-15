import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class HomeScreen extends Component{
  static navigationOptions = {
    tabBarLabel: 'Home',
  }
  render() {
    const { currentUser } = this.props.screenProps;
    return (
      <ImageBackground
        source={require('../assets/images/visuals/home.png')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}
      >
      <Text>Hallo, {currentUser.displayName}</Text>
      </ImageBackground>
    );
  }
}

export default HomeScreen;