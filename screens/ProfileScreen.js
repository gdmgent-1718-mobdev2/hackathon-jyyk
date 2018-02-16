import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Input } from '../components/Input';
import { StretchedButtonRegister } from '../components/StretchedButtonRegister';

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
      marginTop: '20%'
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
      <View style={styles.form}>
        <View style={styles.input}>
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
        </View>
        <View style={styles.buttons}>
          <StretchedButtonRegister onPress={() => logout()} text="Afmelden" />
        </View>

      </View>
      

      //</ImageBackground>
      
    );
  }
}

export default ProfileScreen;