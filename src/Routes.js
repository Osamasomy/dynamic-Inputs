import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SplashScreen,
  HomeScreen
} from './screens'


const Stack = createStackNavigator();

export default function Routes() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Splash" component={SplashScreen} options = {{headerShown:  false}} />
          <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
