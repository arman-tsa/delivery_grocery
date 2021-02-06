import React from "react";
import { Platform } from "react-native";
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';

import * as ScreenNames from '../../global/screenNames';
//screens
import LoginScreen from "../../Screens/LoginScreen/LoginScreen";

enableScreens();

function OrderStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
        initialRouteName={ScreenNames.LOGIN_SCREEN}
        screenOptions={{headerShown:false}}
        >
            <Stack.Screen name={ScreenNames.LOGIN_SCREEN} component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default OrderStack;