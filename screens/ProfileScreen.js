import React, { Component } from 'react';
import { View } from 'react-native';
import { Input } from '../components/Input';
import { StretchedButtonRegister } from '../components/StretchedButtonRegister'; //change to one button component
import { StretchedButtonLogIn } from '../components/StretchedButtonLogIn'; //change to one button component
import { styles } from '../components/Stylesheet';
import { updateUser } from '../utils/firebaseService'; 
import HomeScreen from './HomeScreen';

class ProfileScreen extends Component{
  constructor(props){
    super(props);
    const { currentUser } = this.props.screenProps;
    this.state = ({
      email: currentUser.email,
      name: currentUser.displayName,
      uid: currentUser.uid,
      //password: '',
      editable: false,
    })
  }

  
  
  generateButtons(){
    const { logout } = this.props.screenProps;
    if(this.state.editable == false){
      return (
        <View style={styles.buttons}>
          <StretchedButtonLogIn onPress={() => this.edit()} text="Bewerken" styling="loggin"/>
          <StretchedButtonRegister onPress={() => logout()} text="Afmelden" />
        </View>
      );
    }
      return (
        <View style={styles.buttons}>
          <StretchedButtonLogIn onPress={() => this.save()} text="Opslaan" />
          <StretchedButtonRegister onPress={() => this.cancel()} text="Cancel" />
        </View>
      );
  }

  edit(){
    
    this.setState({
      editable: true,
    });    
  }

  save(){
    this.setState({editable: false});
    alert('U info is geupdate');
    updateUser(this.state.name, this.state.email);
  }

  cancel(){
    const { currentUser } = this.props.screenProps;
    this.setState({
      editable: false,
      name: currentUser.displayName,
      email: currentUser.email,
      password: '',
    });
  }

  componentWillUpdate(){
    this.generateButtons();
  }

  render() {
    //const { logout } = this.props.screenProps;
    //const { currentUser } = this.props.screenProps;
    let button = this.generateButtons();
    return (
      <View style={styles.form}>
        <View style={styles.input}>
          <Input
            //placeholder={currentUser.displayName}
            placeholder= {this.state.name}
            label='Name'
            onChangeText= {name => this.setState({ name })}
            value= {this.state.name}
            editable={this.state.editable}
          />
          <Input
            //placeholder={currentUser.email}
            placeholder= {this.state.email}
            label='Email'
            onChangeText= {email => this.setState({ email })}
            value= {this.state.email}
            editable={this.state.editable}
          />
        </View>

        <View style={styles.buttons}>
          {button}
        </View>

      </View>
      
    );
  }
}

export default ProfileScreen;

//<StretchedButtonRegister onPress={() => logout()} text="Afmelden" />