import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from '../views/main'
import CharacterDetails from '../views/characterDetails'

const RootStack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Main" component={ Main } />
        <RootStack.Screen name="CharacterDetails" component={ CharacterDetails } />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}