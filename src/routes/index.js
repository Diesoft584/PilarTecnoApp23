import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Tabs} from './Tabs';
import Login from '../screens/Auth/Login';
import Lists from '../screens/Lists/Lists';
import ListsDetail from '../screens/Lists/ListDetail';
import {useSelector} from 'react-redux';
import {appSelector} from '../redux/appRedux';

const Stack = createStackNavigator();

export default AppStack = props => {
  const isLogged = useSelector(appSelector.jwt);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLogged ? (
        <Stack.Screen name="AppStack" component={Tabs} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
      <Stack.Screen name="Lista" component={Lists} />
      <Stack.Screen name="ListDetail" component={ListsDetail} />
    </Stack.Navigator>
  );
};
