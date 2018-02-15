import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/Submit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class ProfileScreen extends Component{
  render() {
    const { logout } = this.props.screenProps;
    return (
      <View style={styles.container}>
        <Text>This is the Profile Screen</Text>
        <Button onPress={() => logout()} title="Afmelden"/>
      </View>
    );
  }
}

export default ProfileScreen;