import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from '../components/Submit';
import { Input } from '../components/Input';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  button: {
    flex: 1,
    flexDirection: 'column-reverse',
  }
});

class ProfileScreen extends Component{
  constructor(props){
    super(props);

    this.state = ({
      email: '',
      password: '',
      name: '',
    })
  }
  render() {
    const { logout } = this.props.screenProps;
    const { currentUser } = this.props.screenProps;
    return (
      /*<ImageBackground
        source={require('../assets/images/visuals/profile.png')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}
      >*/
      <View style={styles.container}>
        <Input
            placeholder={currentUser.displayName}
            label='Name'
            onChangeText= {name => this.setState({ name })}
            value= {this.state.name}
          />
          <Input
            placeholder={currentUser.email}
            label='Email'
            onChangeText= {email => this.setState({ email })}
            value= {this.state.email}
          />
          <Input
            placeholder={currentUser.apiKey}
            label='Password'
            secureTextEntry
            onChangeText= {password => this.setState({ password })}
            value= {this.state.password}
          />
        <View style={styles.button}>
          <Button onPress={() => logout()} title="Afmelden" />
        </View>

      </View>
      

      //</ImageBackground>
      
    );
  }
}

export default ProfileScreen;