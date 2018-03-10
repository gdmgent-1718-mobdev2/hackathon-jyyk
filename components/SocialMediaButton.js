import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './Stylesheet'; 

export class SocialMediaButton extends Component{
  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress} style={styles.socialMediaButton}>
          <Image
            style={styles.socialMediaImage}
            source={this.props.socialmedia}
          />
        </TouchableOpacity>
    );
  }
}