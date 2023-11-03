import React from 'react';
import AppStack from './src/routes/index';
import {NavigationContainer} from '@react-navigation/native';

const App = props => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
