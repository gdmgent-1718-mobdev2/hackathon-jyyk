import React, { Component } from 'react';
import { View } from 'react-native';
import { Input } from '../components/Input';
import { StretchedButton } from '../components/StretchedButton'; 
import { styles } from '../components/Stylesheet';

export default class ProfileScreen extends Component{
  constructor(props){
    super(props);
  }

  render() {
    const { logout } = this.props.screenProps;
    const { currentUser } = this.props.screenProps;
    return (
      <View style={styles.form}>
        <View style={styles.input}>
          <Input
            returnKeyType='next'
            autoCapitalize='words'
            icon={require('../assets/images/icons/profile.png')}
            placeholder= {currentUser.displayName}
            value= {currentUser.displayName}
            editable={false}
          />
          <Input
            autoCapitalize='none'
            keyboardType='email-address'
            returnKeyType='next'
            icon={require('../assets/images/icons/enveloppe-icon.png')}
            placeholder= {currentUser.email}
            value= {currentUser.email}
            editable={false}
          />
        </View>

        <View style={styles.buttons}>
          <StretchedButton onPress={() => this.props.navigation.navigate('EditProfile')} text="Bewerken" color='#D5DDDE'/>
          <StretchedButton onPress={() => logout()} text="Afmelden" color='#3C5148' />
        </View>

      </View>
      
    );
  }
}
