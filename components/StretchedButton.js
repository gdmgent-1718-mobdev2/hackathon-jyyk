import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BarlowText } from './BarlowText';
import { OpenSansText }  from './OpenSansText';
import { styles } from './Stylesheet'; 

export class StretchedButton extends Component{
  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress} style={[styles.button,
          this.props.color && {
            backgroundColor: this.props.color
          }
        ]}>
          <BarlowText name={this.props.text}/>
        </TouchableOpacity>
    );
  }
}