import React from "react";
import { Platform, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from "react-native-screens";

import { ScreenNames } from 'global/index';

//Screens
import { NOTIFICATION_SCREEN } from "global/screenNames";
import NotificationScreen from "src/Screens/NotificationScreen/NotificationScreen";


enableScreens();

const NotificationoStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={ScreenNames.NOTIFICATION_SCREEN}>
            <Stack.Screen name={ScreenNames.NOTIFICATION_SCREEN} component={NotificationScreen} />
        </Stack.Navigator>
    )

}

export default NotificationoStack;