import React from 'react';
import { Text, View } from 'react-native';
import { logInUser } from '../utils/firebaseService';
import { Input } from '../components/Input';
import { StretchedButtonRegister } from '../components/StretchedButtonRegister'; //change to one button component
import { styles } from '../components/Stylesheet'; 

export default class LoginScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = ({
      email: '',
      password: '',
    })
  }

  render() {
    const { login } = this.props.screenProps;
    return (
        <View style={styles.form}>
          <View style={styles.input}>
            <Input
              placeholder='Enter your email'
              label='Email'
              onChangeText= {email => this.setState({ email })}
              value= {this.state.email}
              autoCapitalize='none'
              keyboardType='email-address'
              returnKeyType='next'
            />
            <Input
              placeholder='Enter your password'
              label='Password'
              secureTextEntry
              onChangeText= {password => this.setState({ password })}
              value= {this.state.password}
              autoCapitalize='none'
              keyboardType='default'
              returnKeyType='send'
            />
          </View>
          <View style={styles.buttons}>
            <StretchedButtonRegister  onPress={() => logInUser(this.state.email, this.state.password, login)} text='Log In' />
          </View>          
        </View>
    );
  }
}