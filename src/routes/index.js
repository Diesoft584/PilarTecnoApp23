import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Tabs} from './Tabs';
import Login from '../screens/Auth/Login';
import Lists from '../screens/Lists/Lists';
import ListsDetail from '../screens/Lists/ListDetail';

const Stack = createStackNavigator();

export default AppStack = props => {
  const isLogged = true;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {true ? (
        <Stack.Screen name="AppStack" component={Tabs} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
      <Stack.Screen name="Lista" component={Lists} />
      <Stack.Screen name="ListDetail" component={ListsDetail} />
    </Stack.Navigator>
  );
};
