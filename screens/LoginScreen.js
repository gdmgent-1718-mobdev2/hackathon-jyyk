import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { logInUser } from '../utils/firebaseService';
import { Input } from '../components/Input';
import { StretchedButtonRegister } from '../components/StretchedButtonRegister';

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
            />
            <Input
              placeholder='Enter your password'
              label='Password'
              secureTextEntry
              onChangeText= {password => this.setState({ password })}
              value= {this.state.password}
            />
          </View>
          <View style={styles.buttons}>
            <StretchedButtonRegister  onPress={() => logInUser(this.state.email, this.state.password, login)} text='Log In' />
          </View>          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

  },
    buttons: {
      flex: 0,
      alignSelf: 'stretch',
      justifyContent: 'flex-end',
      flexDirection: 'column',
    },
    input:{
      width: '90%',
      flex: 3,

    }
});
