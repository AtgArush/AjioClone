import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationStrings from '../constant/navigationStrings';
import TabRoutes from './TabRoutes';
import {ShopOptions, ProductPage} from '../Screen';
const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <React.Fragment>
      <Stack.Screen name={navigationStrings.TABROUTES} component={TabRoutes} />
      <Stack.Screen
        name={navigationStrings.SHOPOPTIONS}
        component={ShopOptions}
      />
      <Stack.Screen
        name={navigationStrings.PRODUCTPAGE}
        component={ProductPage}
      />
    </React.Fragment>
  );
}
