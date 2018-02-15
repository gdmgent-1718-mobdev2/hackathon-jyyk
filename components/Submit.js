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
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{ title }</Text>
      </ TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 20,
    width: '100%',
    backgroundColor: '#00aeef',
    borderRadius: 4,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18
  }
});
