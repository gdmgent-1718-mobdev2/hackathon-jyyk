import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    //container for initialScreen
    containerInitial: {
        flex: 1,
        backgroundColor: '#6B8E40',
        flexDirection: 'column',
    },
    //container for other screens
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //InitialScreen components
    logo: {
        flex: 3,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flex: 1, //Login design not ok -> change to 0
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        marginTop: '2%'
    },
    //HomeScreen components
    welcomeMsg: {
        fontSize: 38,
        textAlign: 'center',
    },
    //forms (Login, register, profile)
    form: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    
    },
    //align inputboxes
    input: {
        width: '90%',
        flex: 1,
        marginTop: '15%',
        marginBottom: '5%',
        justifyContent: 'flex-end',
    },
    //text components
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'barlow-condensed-regular'
    },
    //button component styling
    button: {
        flex: 1,
        justifyContent: 'center',
        padding: 50
    },
    lightGray: {
        backgroundColor: '#D5DDDE'
    },
    darkGreen: {
        backgroundColor: '#3C5148'
    },
    lightGreen: {
        backgroundColor: '#6B8E40'
    },
    //logo component
    imageLogo: {
        flex: 0,
        width: 250,
        height: 170
    },
    //Input component log in/register
    containerInput: {
        paddingBottom: 10,
        marginTop: '5%',
        width: '100%',
        borderColor: '#eee',
        borderBottomWidth: 2,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: '33.33%',
      },
      inputbox: {
        flex:1,
        paddingRight: 5,
        paddingLeft: 5,
        color: '#333',
        fontSize: 17,
        width: '100%',
      },
      imageTextInput: {
          flex: 0,
          width: '6%',
          height: '100%',
          marginEnd: '4%',
      },
      //input component profile
      containerInputProfile: {
        paddingBottom: 10,
        marginTop: '5%',
        width: '100%',
        borderColor: '#eee',
        borderBottomWidth: 2,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: '20%',
      },
      //Social media buttons
      socialMediaContainer: {
        flex: 1,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      },
      socialMediaButton: {
        flex: 0,
        width: '30%',
        height: '50%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '15%',
        marginLeft: '3%',
        marginRight: '3%',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#D5DDDE',
      },
      socialMediaImage: {
          width: '40%',
          height: '40%',
          flex:0,
          flexDirection: 'row',
          marginTop: '30%',
          marginLeft: '10%',
          marginRight: '10%',
        },
      //textQuestion
      textQuestionContainer: {
        flex:0,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      },
      textQuestion: {
          color: '#D5DDDE',
          textAlign: 'center',
          marginBottom: '5%'
      }

});