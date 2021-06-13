import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Pages/Home/Home';
import Profile from '../Pages/Profile/Profile';
import UserItem from '../Components/UserItem/UserItem';
import Notifications from '../Pages/Notifications/Notifications';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();


const BottomTab = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#FFF"
    barStyle={{ backgroundColor: '#c6653c' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={SearchStackScreen}
      options={{
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="search" size={24} color={color} />
        ),
      }}
    />
    
  </Tab.Navigator>
);

export default BottomTab;

const serviceCategory = "Perfil do Prestador";

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#c6653c',
      shadowRadius: 0,
      elevation: 0,
    },
    headerTintColor: '#FFF',
    headerTitleAlign: 'center',
}}>
  <HomeStack.Screen name="Home" component={Home}
    options={{
      title: 'Beezy'
    }}
  />
  <HomeStack.Screen name="Profile" component={Profile} options={{
    title: serviceCategory,
  }}/>
  
  <HomeStack.Screen name="Busca" component={Notifications} options={{
    title: 'Busca',
  }}/>
</HomeStack.Navigator>
);


const SearchStackScreen = ({navigation}) => (
  <SearchStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#c6653c',
      shadowRadius: 0,
      elevation: 0,
    },
    headerTintColor: '#FFF',
    headerTitleAlign: 'center',
}}>
  <SearchStack.Screen name="Busca" component={Notifications}/>
  <SearchStack.Screen name="Profile" component={Profile} options={{
    title: 'Perfil do Prestador',
  }}/>
  <SearchStack.Screen name="Home" component={Home} options={{
    title: 'Beezy',
  }}/>

</SearchStack.Navigator>
);

