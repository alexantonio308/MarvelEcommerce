import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react';
import Home from '../pages/home';
import Description from '../pages/description';
import Cart from '../cart/';
import { TouchableOpacity, Image, View } from 'react-native';

export default () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={Home} screenOptions ></Stack.Screen>
        <Stack.Screen style={{ backgroundColor: '#101010' }} name='Description' component={Description} />
        <Stack.Screen style={{ backgroundColor: '#101010' }} name='Cart' component={Cart} options={{ tabBarIcon: IconWithBadge }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function IconWithBadge() {
  const { cart } = useCart()
  return (
    <View style={{ width: 24, height: 24, margin: 25, alignItems: 'center' }}>
      <Text>
        {Object.keys(cart).length}
      </Text>
    </View>
  )
}