/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ImageBackground,
  Image
} from 'react-native';

import FBSDK, {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';

import { Actions } from 'react-native-router-flux';

import firebase, { 
  firebaseAuth 
} from './Firebase';

const { FacebookAuthProvider } = firebase.auth

export default class LoginView extends Component {


  state = {
    credentials: null
  }

  
  componentWillMount() {
  // this.authenticateUser()
  }

  authenticateUser = () => {

    AccessToken.getCurrentAccessToken().then( (data) => {
      const { accessToken } = data

      credential = FacebookAuthProvider.credential(accessToken)    // Se crea la credencial de facebook

      firebaseAuth.signInWithCredential(credential)           // Se le pasa la credencial de facebook a firebase
         .then( (credentials) => {

             Actions.home()

         }).catch((err) => {

             console.warn('User signin error', err);

            });
    })
  }

  handleLoginFinish = (error, result) => {
              if (error) {
                console.error(error)
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {                                             // Si el login es exitoso
               
                  this.authenticateUser()
                
              }
    }


  render() {

    return (

      <ImageBackground source={require('./background.jpg')} style={styles.container}>
        <Image source={require('./logo.png')} style={styles.logo} />
        <Text style={styles.welcome}>
          Bienvenidos a PlatziMusic
        </Text>
   
        <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={this.handleLoginFinish}
          onLogoutFinished={() => alert("logout.")}/>

      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    backgroundColor: 'transparent',
    color: 'white'
  }

});