import React from "react";
import { Platform, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Colors from '../../global/colors';
import * as ScreenNames from '../../global/screenNames';

//Stacks
import OrderStack from '../OrderStack/OrderStack';
import ProfileStack from "../ProfileStack/ProfileStack";

//svg
import OrderBag from '../../assets/svg/bm-Order';
import NotificationBell from '../../assets/svg/bm-notification';
import Profile from '../../assets/svg/bm-user';

//screens
import NotificationScreen from "../../Screens/NotificationScreen/NotificationScreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={ScreenNames.ORDER_STACK}
            tabBarOptions={{
                activeTintColor: "black",
                showLabel: false,
                style: Platform.OS == 'android'
                    ?
                    {
                        backgroundColor: Colors.ORANGE_YELLOW,
                        height: 60,
                        borderRadius: 20,
                        margin: 20
                    }
                    :
                    {
                        backgroundColor: Colors.ORANGE_YELLOW,
                        borderRadius: 20,
                        margin: 20
                    }

            }}
        >

            <Tab.Screen
                name={ScreenNames.ORDER_STACK}
                component={OrderStack}
                options={{
                    tabBarLabel: "Order",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                position: "relative",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                alignContent: "center",
                                justifyContent: "center",

                            }}>
                                <OrderBag />
                                {
                                    focused ? <View style={{
                                        position: 'absolute',
                                        width: 5,
                                        height: 5,
                                        borderRadius: 3,
                                        backgroundColor: "black",
                                        bottom: -8.66
                                    }}></View> : (<></>)
                                }
                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen
                name={ScreenNames.NOTIFICATION_SCREEN}
                component={NotificationScreen}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                position: 'relative',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                alignContent: 'center',
                                justifyContent: 'center'
                            }}>
                                <NotificationBell />
                                {
                                    focused ? <View style={{
                                        position: 'absolute',
                                        width: 5,
                                        height: 5,
                                        borderRadius: 3,
                                        backgroundColor: "black",
                                        bottom: -8.66
                                    }}></View> : (<></>)
                                }
                            </View>
                        )
                    }

                }}
            />

            <Tab.Screen
                name={ScreenNames.PROFILE_STACK}
                component={ProfileStack}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                position: "relative",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                alignContent: "center",
                                justifyContent: "center",

                            }}>
                                <Profile />
                                {
                                    focused ? <View style={{
                                        position: 'absolute',
                                        width: 5,
                                        height: 5,
                                        borderRadius: 3,
                                        backgroundColor: "black",
                                        bottom: -8.66
                                    }}></View> : (<></>)
                                }
                            </View>
                        )
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomTab;
