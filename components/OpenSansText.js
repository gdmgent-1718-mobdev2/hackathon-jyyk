import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Font } from 'expo';

export class OpenSansText extends React.Component {
  state = {
    fontLoaded: false,
  };
  componentDidMount() {
    Font.loadAsync({
      'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
        this.state.fontLoaded ? (
          <Text style={styles.text}>{this.props.name}</Text>
        ) : null
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'open-sans-regular'
  }
});