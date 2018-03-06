/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';
import HomeView from './HomeView';
import LoginView from './LoginView';
import ArtistDetailView from './ArtistDetailView';

export default class App extends Component {

  render() {

    //const isAndroid = Platform.OS === 'android'   // Si es android true, sino false

    return <Router>

      
      <Scene key="root">
        <Scene key="login" component={LoginView} hideNavBar={true}/>
        <Scene key="home" component={HomeView} hideNavBar={true}/>
        <Scene key="artistDetail" component={ArtistDetailView} title="Comentarios" hideNavBar={false} />
      </Scene>

    </Router>
  }
}


