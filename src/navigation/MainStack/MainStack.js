import React from "react";
import { Platform } from "react-native";
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';

import * as ScreenNames from '../../global/screenNames'

//screens
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
import BottomTab from "../BottomTab/BottomTab";

enableScreens();

function MainStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
        screenOptions={{headerShown:false}}
            initialRouteName={ScreenNames.BOTTOM_TAB}
        >
            <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTab} />
        </Stack.Navigator>
    )
}

export default MainStack;