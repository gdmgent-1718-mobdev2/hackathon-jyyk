import React from 'react';
import { Image } from 'react-native';
import { styles } from './Stylesheet'; 

export class IconTextInput extends React.Component {
  render(){
    return(
        <Image
            style={styles.imageTextInput}
            source={this.props.icon}
        />
    );
  }
}
