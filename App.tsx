/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {View} from 'react-native';

import MenuPage from './pages/MenuPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateRoom from './pages/CreateRoom';
import JoinRoom from './pages/JoinRoom';
import PlayRoom from './pages/PlayRoom';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Menu" component={MenuPage} />
        <Stack.Screen name="CreateRoom" component={CreateRoom} />
        <Stack.Screen name="JoinRoom" component={JoinRoom} />
        <Stack.Screen name="PlayRoom" component={PlayRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
