import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class WalletScreen extends Component{
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/visuals/wallet.png')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}
      >
        <View style={styles.container}></View>
      </ImageBackground>
      
    );
  }
}

export default WalletScreen;