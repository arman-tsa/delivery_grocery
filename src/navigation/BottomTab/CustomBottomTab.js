import React from 'react';
import { Text, View, Platform, TouchableOpacity } from 'react-native';
import { Fonts, Colors } from 'global/index';

//insets
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//svgs
import OrderSvg from 'assets/svg/bm-Order';
import NotificationSvg from 'assets/svg/bm-notification';
import UserSvg from 'assets/svg/bm-user';

//BluredSvg
import OrderBluredSvg from 'assets/svg/bm-OrderBlured';
import NotificationBluredSvg from 'assets/svg/bm-notificationBlured';
import UserBluredSvg from 'assets/svg/bm-userBluredd';

//styles
import { styles } from './style';

const CustomBottomTab = ({ state, navigation }) => {
    const insets = useSafeAreaInsets();
    const isIos = Platform.OS === 'ios';

    const svg = [<OrderSvg />, <NotificationSvg />, <UserSvg />];
    const bluredSvg = [<OrderBluredSvg />, <NotificationBluredSvg />, <UserBluredSvg />];
    const styleToBeApplied=[styles.order,styles.notification,styles.user];

    return (
        <View style={[styles.container, { paddingBottom: isIos ? insets.bottom : 20 }]}>
            <View style={styles.tabBarContainer}>
                {
                    state.routes.map((route, index) => {
                        const isFocused = state.index === index;
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });
                            if (!isFocused && !event.defaultPrevented) {
                                console.log(route.name);
                                navigation.navigate(route.name);
                            }
                        }

                        return (
                            <TouchableOpacity key={`bottomTabs-${index}`}
                                activeOpacity={1} onPress={onPress}
                                style={styleToBeApplied[index]}
                            >
                                {
                                    isFocused
                                    ?
                                    svg[index]
                                    :
                                    bluredSvg[index]
                                }
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )

}



export default CustomBottomTab;
















