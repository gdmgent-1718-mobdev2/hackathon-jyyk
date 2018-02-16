import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export class Button extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    let onPress = this.props.onPress;
    let title = this.props.title;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, styles.register]}>
        <Text>{ title }</Text>
      </ TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    button: {
      flex: 0,
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
