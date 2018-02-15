import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { BarlowText } from './BarlowText';
import { OpenSansText }  from './OpenSansText';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    padding: 50
  },
  inloggen: {
    backgroundColor: '#D5DDDE'
  },
  register: {
    backgroundColor: '#3C5148'
  },
});

export class StretchedButtonLogIn extends Component{
  render() {
    return (
        <TouchableOpacity style={[styles.button, styles.inloggen]}>
          <BarlowText name={this.props.text}/>
        </TouchableOpacity>
    );
  }
}
