import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';

export default class Aanmelden extends React.Component {
  state = {
    fontLoaded: false,
  };
  componentDidMount() {
    Font.loadAsync({
      'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      'barlow-condensed-regular': require('../assets/fonts/BarlowCondensed-Regular.ttf')
    });
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      'barlow-condensed-regular': require('../assets/fonts/BarlowCondensed-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.image}
            source={require('../assets/images/logo.png')}
          />
        </View>
        <View style={styles.buttons}>
          <View style={[styles.button, styles.button_inloggen]}>
            {
              this.state.fontLoaded ? (
                <Text style={styles.text}>
                  Inloggen
                </Text>
              ) : null
            }
          </View>
          <View style={[styles.button, styles.button_registreren]}>
            {
              this.state.fontLoaded ? (
                <Text style={styles.text}>
                  Registreren
                </Text>
              ) : null
            }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B8E4E',
    flexDirection: 'column',
  },
  image: {
    flex: 0,
    width: 250,
    height: 170
  },
  logo: {
    flex: 3,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    padding: 50
  },
  button_inloggen: {
    backgroundColor: '#D5DDDE'
  },
  button_registreren: {
    backgroundColor: '#3C5148'
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'barlow-condensed-regular'
  }
});
