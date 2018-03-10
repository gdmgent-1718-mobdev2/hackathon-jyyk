import React, { Component } from 'react';
import { View } from 'react-native';
import { Input } from '../components/Input';
import { StretchedButton } from '../components/StretchedButton'; //change to one button component
import { styles } from '../components/Stylesheet';
import { updateUser } from '../utils/firebaseService';

class ProfileScreen extends Component{
  constructor(props){
    super(props);
    const { currentUser } = this.props.screenProps;
    this.state = ({
      name: currentUser.displayName,
      email: currentUser.email,
      password: '',
      uid: currentUser.uid,
    })
  }

  save(){
    const { update } = this.props.screenProps;
    updateUser(this.state.name, this.state.email,this.state.password, this.state.uid, user => {
      update(user);
      this.props.navigation.goBack();
    });
  }

  render() {
    return (
      <View style={styles.form}>

        <View style={styles.input}>
          <Input
            placeholder= {this.state.name}
            label='Name'
            onChangeText= {name => this.setState({ name })}
            value= {this.state.name}
            editable={true}
          />
          <Input
            placeholder= {this.state.email}
            label='Email'
            onChangeText= {email => this.setState({ email })}
            value= {this.state.email}
            editable={true}
          />
          <Input
            placeholder='Enter your password'
            label='Password'
            secureTextEntry
            onChangeText= {password => this.setState({ password })}
            value= {this.state.password}
            autoCapitalize='none'
            keyboardType='default'
            />
        </View>

      <View style={styles.buttons}>
        <StretchedButton onPress={() => this.save()} text="Opslaan" color='#D5DDDE'/>
        <StretchedButton onPress={() => this.props.navigation.goBack()} text="Cancel" color='#3C5148'/>
      </View>

      </View>
    );
  }
}

export default ProfileScreen;
