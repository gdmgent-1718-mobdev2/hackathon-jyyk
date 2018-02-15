import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Font } from 'expo';

export class BarlowText extends React.Component {
  state = {
    fontLoaded: false,
  };
  componentDidMount() {
    Font.loadAsync({
      'barlow-condensed-regular': require('../assets/fonts/BarlowCondensed-Regular.ttf')
    });
  }
  async componentDidMount() {
    await Font.loadAsync({
      'barlow-condensed-regular': require('../assets/fonts/BarlowCondensed-Regular.ttf')
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
    fontFamily: 'barlow-condensed-regular'
  }
});