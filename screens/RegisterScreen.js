import React from 'react';
import { View, Text } from 'react-native';
import { signUpUser } from '../utils/firebaseService';
import { Input } from '../components/Input';
import { StretchedButton } from '../components/StretchedButton';
import { styles } from '../components/Stylesheet'; 
import { SocialMediaButton } from '../components/SocialMediaButton';

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
          <View style={styles.input}>
            <Input
              placeholder='Enter your name'
              onChangeText= {name => this.setState({ name })}
              value= {this.state.name}
              returnKeyType='next'
              autoCapitalize='words'
              icon={require('../assets/images/icons/profile.png')}
            />
            <Input
              placeholder='Enter your email'
              onChangeText= {email => this.setState({ email })}
              value= {this.state.email}
              autoCapitalize='none'
              keyboardType='email-address'
              returnKeyType='next'
              icon={require('../assets/images/icons/enveloppe-icon.png')}
            />
            <Input
              placeholder='Enter your password'
              secureTextEntry
              onChangeText= {password => this.setState({ password })}
              value= {this.state.password}
              autoCapitalize='none'
              keyboardType='default'
              returnKeyType='send'
              icon={require('../assets/images/icons/lock.png')}
            />
          </View>
          <View style={styles.buttons}>
            <StretchedButton onPress={() => signUpUser(this.state.name, this.state.email, this.state.password, login)} text='Sign Up' color='#6B8E40'/>
          </View>
          <View style={styles.socialMediaContainer}>
            <SocialMediaButton name="Facebook" socialmedia={require('../assets/images/icons/facebook-logo.png')}></SocialMediaButton>
            <SocialMediaButton name="Google" socialmedia={require('../assets/images/icons/google-plus.png')}></SocialMediaButton>
          </View>
          <View style={styles.textQuestionContainer}>
            <Text style={styles.textQuestion}>Heb je al een account?</Text>
          </View>
          <View style={styles.buttons}>
            <StretchedButton text='Log In' onPress={() => this.props.navigation.navigate('Login')} color='#D5DDDE'></StretchedButton>
          </View>
        </View>
    );
  }
}