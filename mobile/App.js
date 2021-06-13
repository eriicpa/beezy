import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import BottomTab from './src/routes/BottomTab';
import AppStack from './src/routes/AppStack';

const Drawer = createDrawerNavigator();



function App() {

  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={BottomTab} />
    //     {/* <Drawer.Screen name="Profile" component={ProfileStackScreen} /> */}
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <AppStack />
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



export default App;
