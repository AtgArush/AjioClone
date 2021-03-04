import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Signup, LandingPage, ProductPage, LoginUsername, LoginPassword} from '../Screen';
import navigationString from '../constant/navigationStrings';
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <React.Fragment>
      <Stack.Screen
        name={navigationString.LANDINGPAGE}
        component={LandingPage}
      />
      <Stack.Screen name={navigationString.LOGINUSERNAME} component={LoginUsername} />
      <Stack.Screen name={navigationString.LOGINPASSWORD} component={LoginPassword} />
      <Stack.Screen name={navigationString.SIGNUP} component={Signup} />
    </React.Fragment>
  );
}
