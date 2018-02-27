import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../components/Stylesheet';

class WalletScreen extends Component{
  render() {
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 38, color: 'black'}}>WalletScreen</Text>
        </View>
    );
  }
}

export default WalletScreen;