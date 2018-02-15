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
      name: '',
    })
  }

  render() {
    const { login } = this.props.screenProps;
    return (
        <View style={styles.form}>
          <Input
            placeholder='Enter your name'
            label='Name'
            onChangeText= {name => this.setState({ name })}
            value= {this.state.name}
          />
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
          <Button onPress={() => signUpUser(this.state.email, this.state.password, login)} title='Sign Up' style='primary' />
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
