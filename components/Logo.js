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

/*const styles = StyleSheet.create({
  image: {
    flex: 0,
    width: 250,
    height: 170
  }
});*/
