import React from 'react';
import { Text, View } from 'react-native';

export default class Aanmelden extends React.Component {
  render() {
    return (
      <Text style={styles.text}>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'open sans'
  }
});