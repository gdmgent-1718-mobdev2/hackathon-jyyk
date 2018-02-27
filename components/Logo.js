import React from 'react';
import { Image } from 'react-native';
import { styles } from './Stylesheet'; 

export class Logo extends React.Component {
  render(){
    return(
        <Image
            style={styles.imageLogo}
            source={require('../assets/images/logo.png')}
        />
    );
  }
}
