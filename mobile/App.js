
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RBSheet from "react-native-raw-bottom-sheet";
import Cf from './cfg.js';
import Client1 from './StartupPage.js';
import Client2 from './ClientsPage.js';
import Client3 from './ClientProfile.js';
import Client4 from './ClientScheduling.js';
import Client5 from './ClientDetails.js';
import Client6 from './ClientDetails2.js';
import Client7 from './ClientDetails3.js';
import Client8 from './ClientDetails4.js';
import Client9 from './ClientDetails5.js';

export default function App() {
  return (

     <Client1/>


  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
