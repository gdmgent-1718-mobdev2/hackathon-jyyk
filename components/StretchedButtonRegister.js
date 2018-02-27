import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { BarlowText } from './BarlowText';
import { OpenSansText }  from './OpenSansText';
import { styles } from './Stylesheet'; 

export class StretchedButtonRegister extends Component{
  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress} style={[styles.button, styles.register]}>
          <BarlowText name={this.props.text}/>
        </TouchableOpacity>
    );
  }
}
