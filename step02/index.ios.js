/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import library to create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create component
const App = () => 
(
<Header />

);


// Render it to the device
AppRegistry.registerComponent('step02', () => App);
