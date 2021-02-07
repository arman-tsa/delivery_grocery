import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

import { ScreenNames } from 'global/index'
//Screens
import ProfileScreen from 'src/Screens/ProfileScreen/ProfileScreen';

enableScreens();

const ProfileStack = () => {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
            initialRouteName={ScreenNames.PROFILE_SCREEN}>
            <Stack.Screen name={ScreenNames.PROFILE_SCREEN} component={ProfileScreen} />
        </Stack.Navigator>
    )

}

export default ProfileStack;