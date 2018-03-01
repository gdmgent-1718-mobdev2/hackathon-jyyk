import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Stylesheet'; 

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
    let editable = this.props.editable;

    return(
        <View style={styles.containerInput}>
          <Text style={styles.label}> { label }</Text>
          <TextInput style={styles.inputbox}
            autoCorrect={false}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            editable={editable}
          />
        </View>
    )
  }
}