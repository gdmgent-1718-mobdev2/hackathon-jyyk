import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    return (
      <View style={styles.container}>
        <Text>This is the Profile Screen</Text>
      </View>
    );
  }
}

export default ProfileScreen;