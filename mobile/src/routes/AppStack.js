import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Landing from '../Pages/Landing/Landing';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import BottomTab from './BottomTab';
import ProviderList from '../Pages/Notifications/Notifications';
import ProvidersList from '../Pages/ProvidersList/ProvidersList';
import Notifications from '../Pages/Notifications/Notifications';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <>
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="BottomTab" component={BottomTab} />
        <Screen name="ProviderList" component={ProviderList} />
        <Screen name="ProvidersList" component={ProvidersList} />
        <Screen name="Notifications" component={Notifications} />
      </Navigator>
    </NavigationContainer>
    </>
  )
}

export default AppStack;
