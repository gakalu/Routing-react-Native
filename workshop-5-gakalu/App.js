import 'react-native-gesture-handler'
import React from 'react'
import {createStackNavigator} from '@react-navigation/Stack'
import { Settings, StyleSheet, Text, View } from 'react-native';
import{NavigationContainer} from '@react-native/native'
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import ProfileDetails  from './components/ProfileDetails';
import Repositories from './components/Repositories';
import WebView from './components/WebView';
import Notes from './components/Notes';
const Stack=createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="search" component={Search}/>
      <Stack.Screen name="Dashboard" component={Dashboard}/>
      <Stack.Screen name="profileDetails" component={ProfileDetails}/>
      <Stack.Screen name="Repositories" component={Repositories}/>
      <Stack.Screen name="WebView" component={WebView}/>
      <Stack.Screen name="Notes" component={Notes}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
