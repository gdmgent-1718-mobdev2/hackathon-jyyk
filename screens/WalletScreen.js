import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {StretchedButton} from '../components/StretchedButton';
import { TransactionList } from '../components/TransactionList';
import { getTransactions } from '../utils/firebaseService';

class WalletScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    }
  }

  componentWillMount() {
    const { currentUser } = this.props.screenProps;
    this.setState({ transactions: 
      [
        {title: 'testitem1', date: '2 sep 2017', amount: 10, transactionType: 'in'},
        {title: 'testitem2', date: '5 aug 2017', amount: 20, transactionType: 'out' },
        {title: 'testitem3', date: '3 aug 2017', amount: 50, transactionType: 'in'},
        {title: 'testitem4', date: '9 sep 2017', amount: 10, transactionType: 'in'},
        {title: 'testitem5', date: '5 jun 2017', amount: 20, transactionType: 'out' },
        {title: 'testitem6', date: '31 aug 2017', amount: 50, transactionType: 'in'},
        {title: 'testitem7', date: '20 sep 2017', amount: 10, transactionType: 'in'},
        {title: 'testitem8', date: '6 jul 2017', amount: 20, transactionType: 'out' },
        {title: 'testitem9', date: '7 aug 2017', amount: 50, transactionType: 'in'}
      ]
    });
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>WalletScreen</Text>
          <View style={styles.buttons}>
            <StretchedButton onPress={() => alert('Transactie gedaan')} text="Punten Inruilen" color='#3C5148' />
            
          </View>
          <TransactionList data={this.state.transactions}/>
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