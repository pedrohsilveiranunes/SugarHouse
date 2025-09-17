import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import AboutScreen from './screens/AboutScreen';
import OrdersScreen from './screens/OrdersScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={{ title: 'Menu' }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'Sobre Nós' }}
        />
        <Stack.Screen
          name="Orders" 
          component={OrdersScreen}
          options={{ title: 'Encomendar' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}