import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../components/Stylesheet'; 
import { processTransaction } from '../utils/firebaseService';

export default class ScanInfoScreen extends Component{

  componentWillUnmount() {
    const { params } = this.props.navigation.state;
    const closeModal = params.closeModal;
    closeModal();
  }
  render() {
    const { params } = this.props.navigation.state;
    const { currentUser } = this.props.screenProps;
    const barCode = params ? params.barCode : null;
    try {
      const data = JSON.parse(barCode.data);
      if (data.transactionType === 'in') {
        processTransaction(data, currentUser.uid);
        return (
          <View style={styles.container}>
            <Text style={styles.welcomeMsg}>Je hebt {data.amount} punten ontvangen!</Text>
          </View>
        );
      }
    }
    catch (err) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcomeMsg}>Oeps! Deze QR code lijkt niet de juiste te zijn.</Text>
        </View>
      );
    }
  }
}
