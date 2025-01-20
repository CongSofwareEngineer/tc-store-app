import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {StackScreenProps} from '@react-navigation/stack';
import HomeScreen from '@/Screen/Home';
import ChatScreen from '@/Screen/Chat';

export type ApplicationStackParamList = {
  Home: undefined;
  Chat: {userId?: string};
};

export type NavigationProps = StackScreenProps<ApplicationStackParamList>;

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
