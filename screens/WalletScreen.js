import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../components/Stylesheet'; 

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C5148',
    justifyContent: 'center',
    alignItems: 'center',
  }
});*/

class WalletScreen extends Component{
  render() {
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 38, color: 'white'}}>WalletScreen</Text>
        </View>
    );
  }
}

export default WalletScreen;