import React from "react";
import { Platform, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ScreenNames } from 'global/index'

//Stacks
import OrderStack from "navigation/OrderStack/OrderStack";
import NotificationoStack from "navigation/NotificationStack/NotificationStack";
import ProfileStack from "navigation/ProfileStack/ProfileStack";

//Commponents
import CustomBottomTab from "./CustomBottomTab";

const BottomTab = () => {

    const Tab = createBottomTabNavigator();

    const renderCustomTab = (props) => {
        return (
            <CustomBottomTab {...props} />
        )
    };

    return (
        <Tab.Navigator tabBar={renderCustomTab}>
            <Tab.Screen name={ScreenNames.ORDER_STACK} component={OrderStack} />
            <Tab.Screen name={ScreenNames.NOTIFICATION_STACK} component={NotificationoStack} />
            <Tab.Screen name={ScreenNames.PROFILE_STACK} component={ProfileStack} />
        </Tab.Navigator>
    )
}

export default BottomTab;