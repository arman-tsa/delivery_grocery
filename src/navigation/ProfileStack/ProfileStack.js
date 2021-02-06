import React from "react";
import { Platform } from "react-native";
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';

import * as ScreenNames from '../../global/screenNames';
//components


//screens
import LoginScreen from "../../Screens/LoginScreen/LoginScreen";
import ProfileScreen from "../../Screens/ProfileScreen/ProfileScreen";

enableScreens();

function ProfileStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName={ScreenNames.PROFILE_SCREEN}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={ScreenNames.PROFILE_SCREEN} component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default ProfileStack;