import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {StretchedButtonRegister} from '../components/StretchedButtonRegister';
import { TransactionList } from '../components/TransactionList';

class WalletScreen extends Component{
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>WalletScreen</Text>
          <View style={styles.buttons}>
            <StretchedButtonRegister onPress={() => alert('Transactie gedaan')} text="Punten Inruilen" />
            
          </View>
          <TransactionList />
        </View>
        
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
  },
  title: {
    flex: 2,
    fontSize: 38,
    textAlign: 'center',
    marginTop: '10%'
  },
  buttons: {
    flex: 0,
    flexDirection: 'column',
  }
});

export default WalletScreen;