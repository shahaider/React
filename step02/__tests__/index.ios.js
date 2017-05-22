import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Note: test renderer must be required after react-native.
const App = () => (
<Header headerText={'Shahrukh Haider'} />

);

AppRegistry.registerComponent('step02', () => App);
