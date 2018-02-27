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
        flex: 0, //Login design not ok -> change to 0
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        flexDirection: 'column',
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    
    },
    //allign inputboxes
    input: {
        width: '90%',
        flex: 3,
        marginTop: '20%'
    },
    //text componenets
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
    inloggen: {
        backgroundColor: '#D5DDDE'
    },
    register: {
        backgroundColor: '#3C5148'
    },
    //logo component
    imageLogo: {
        flex: 0,
        width: 250,
        height: 170
    },
    //Input component
    containerInput: {
        marginTop: 10,
        width: '100%',
        borderColor: '#eee',
        borderBottomWidth: 2,
        flex: 0,
        justifyContent: 'flex-start',
      },
      label: {
        padding: 5,
        color: '#333',
        fontSize: 19,
        fontWeight: '700',
        width: '100%',
      },
      inputbox: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#333',
        fontSize: 17,
        width: '100%',
      }

});