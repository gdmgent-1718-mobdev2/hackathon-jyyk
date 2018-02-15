import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { signUpUser } from '../utils/firebaseService';
import { Input } from '../components/Input';
import { Button } from '../components/Submit';

export default class RegisterScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = ({
      email: '',
      password: '',
    })
  }

  render() {
    return (
        <View style={styles.form}>
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
          <Button onPress={() => signUpUser(this.state.email, this.state.password)} title='Sign Up' style='primary' />
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
  }
});
