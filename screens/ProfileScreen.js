import React, { Component } from 'react';
import { View } from 'react-native';
import { Input } from '../components/Input';
import { StretchedButtonRegister } from '../components/StretchedButtonRegister'; //change to one button component
import { StretchedButtonLogIn } from '../components/StretchedButtonLogIn'; //change to one button component
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
            placeholder= {currentUser.displayName}
            label='Name'
            value= {currentUser.displayName}
            editable={false}
          />
          <Input
            placeholder= {currentUser.email}
            label='Email'
            value= {currentUser.email}
            editable={false}
          />
        </View>

        <View style={styles.buttons}>
          <StretchedButtonLogIn onPress={() => this.props.navigation.navigate('EditProfile')} text="Bewerken" styling="loggin"/>
          <StretchedButtonRegister onPress={() => logout()} text="Afmelden" />
        </View>

      </View>
      
    );
  }
}
