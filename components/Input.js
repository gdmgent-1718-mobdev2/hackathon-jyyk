import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export class Input extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    let label = this.props.label;
    let value = this.props.value;
    let onChangeText = this.props.onChangeText;
    let placeholder = this.props.placeholder;
    let secureTextEntry = this.props.secureTextEntry;
    let autoCapitalize = this.props.autoCapitalize;
    let keyboardType = this.props.keyboardType;
    let returnKeyType = this.props.returnKeyType;

    return(
        <View style={styles.container}>
          <Text style={styles.label}> { label }</Text>
          <TextInput style={styles.input}
            autoCorrect={false}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            value={value}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    borderColor: '#eee',
    borderBottomWidth: 2,
    flex: 0,
    justifyContent: 'flex-start',
  },
  label: {
    padding: 5,
    color: '#333',
    fontSize: 19,
    fontWeight: '700',
    width: '100%',
  },
  input: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    color: '#333',
    fontSize: 17,
    width: '100%',
  }
});
