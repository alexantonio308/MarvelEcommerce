import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react';
import Home from '../pages/home';
import Cart from '../pages/cart';
import Description from '../pages/description';


export default () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={Home} screenOptions ></Stack.Screen>
        <Stack.Screen style={{ backgroundColor: '#101010' }} name='Description' component={Description} />
        <Stack.Screen style={{ backgroundColor: '#101010' }} name='Cart' component={Cart}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}