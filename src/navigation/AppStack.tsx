import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Home from '../screens/Home';
import UserDetails from '../screens/UserDetails';

const AppStack = () => {
    const App = createNativeStackNavigator();
    return(
        <App.Navigator screenOptions={{ headerShown: false }}>
             
            <App.Screen name="Home" component={Home}></App.Screen>
            <App.Screen name="UserDetails" component={UserDetails}></App.Screen>
           
        </App.Navigator>
    );
};
export default AppStack;
