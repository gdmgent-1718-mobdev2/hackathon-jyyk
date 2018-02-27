import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../components/Stylesheet'; 


class HomeScreen extends Component{
  static navigationOptions = {
    tabBarLabel: 'Home',
  }
  render() {
    const { currentUser } = this.props.screenProps;
    return (
        <View style={styles.container}>
          <Text style={styles.welcomeMsg}>Hallo, {currentUser.displayName}</Text>
          <Button title="Open Camera" onPress={() => this.props.navigation.navigate('Camera')}></Button>
        </View>
    );
  }
}

export default HomeScreen;