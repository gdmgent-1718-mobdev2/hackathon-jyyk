import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { styles } from './Stylesheet'; 
import { IconTextInput } from '../components/IconTextInput';

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
    let src = this.props.src;
    return(
        <View style={styles.containerInput}>
          <IconTextInput icon={this.props.icon} >
          </IconTextInput>
          <TextInput style={styles.inputbox}
            autoCorrect={false}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            underlineColorAndroid='transparent'
          />
        </View>
    )
  }
}