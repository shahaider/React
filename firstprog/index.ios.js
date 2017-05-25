// Index.ios.js - Coding 

// Import library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Component  (ONE component can be made per file )
const App = () => (

<View style={{flex: 1 }}>
  
<Header headerText={'APP Name'} />
<AlbumList />

</View>
);
// Render on device
AppRegistry.registerComponent('firstprog', () => App);
