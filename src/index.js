import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import Routes from './routes';


export default() => {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}
