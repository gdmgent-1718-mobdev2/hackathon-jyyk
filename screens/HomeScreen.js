import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../components/Stylesheet'; 

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeMsg: {
    fontSize: 38,
    textAlign: 'center',
  }

});*/

class HomeScreen extends Component{
  static navigationOptions = {
    tabBarLabel: 'Home',
  }
  render() {
    const { currentUser } = this.props.screenProps;
    return (
        <View style={styles.container}>
          <Text style={styles.welcomeMsg}>Hallo, {currentUser.displayName}</Text>
        </View>
    );
  }
}

export default HomeScreen;