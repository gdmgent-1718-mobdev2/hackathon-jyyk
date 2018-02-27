import React, { Component } from 'react';
import { View } from 'react-native';
import { Input } from '../components/Input';
import { StretchedButtonRegister } from '../components/StretchedButtonRegister'; //change to one button component
import { styles } from '../components/Stylesheet'; 

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