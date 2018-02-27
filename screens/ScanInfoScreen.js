import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../components/Stylesheet'; 

export default class ScanInfoScreen extends Component{

  componentWillUnmount() {
    const { params } = this.props.navigation.state;
    const closeModal = params.closeModal;
    closeModal();
  }
  render() {
    const { params } = this.props.navigation.state;
    const barCode = params ? params.barCode : null;
    return (
        <View style={styles.container}>
          <Text style={styles.welcomeMsg}>QR code data: {barCode.data}</Text>
        </View>
    );
  }
}
