import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    paddingVertical: 50,
    alignSelf: 'flex-start',
    marginTop: 140,
  },
  welcomeMsg: {
    fontSize: 38,
  }

});

class HomeScreen extends Component{
  static navigationOptions = {
    tabBarLabel: 'Home',
  }
  render() {
    const { currentUser } = this.props.screenProps;
    return (
      <ImageBackground
        source={require('../assets/images/visuals/home.png')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}
      >
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeMsg}>Hallo, {currentUser.displayName.charAt(0).toUpperCase() + currentUser.displayName.slice(1)}</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default HomeScreen;