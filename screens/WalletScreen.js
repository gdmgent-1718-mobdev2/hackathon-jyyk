import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class WalletScreen extends Component{
  render() {
    return (
        <View style={styles.container}>
          <Text>WalletScreen</Text>
        </View>
    );
  }
}

export default WalletScreen;