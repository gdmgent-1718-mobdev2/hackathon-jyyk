import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class HomeScreen extends Component{
  static navigationOptions = {
    tabBarLabel: 'Home',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;