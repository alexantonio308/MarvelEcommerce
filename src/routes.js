import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator }  from '@react-navigation/stack';
import Home from './screens/home';
import Description from './screens/description';
import Checkout from './screens/checkout';
import Logo from './image/logo';




function Routes(){

const Stack = createStackNavigator();
  return (
      <Stack.Navigator screenOptions = 'screen'>
        <Stack.Screen style={{backgroundColor:'#202020'}} name='Home - Comics' component={Home}/>
        <Stack.Screen style={{backgroundColor:'#101010'}} name='Description' component={Description}/>
        <Stack.Screen style={{backgroundColor:'#101010'}} name='Checkout' component={Checkout}/>
      </Stack.Navigator>
  );
}

export default Routes;