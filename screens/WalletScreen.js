import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class WalletScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Wallet Screen</Text>
      </View>
    );
  }
}

export default WalletScreen;