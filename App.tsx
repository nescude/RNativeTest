/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { enableScreens } from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import { Provider } from 'react-redux';
import store from './src/redux/store';

 
enableScreens();

const App = () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};



export default App;
