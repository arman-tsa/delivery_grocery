import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from 'components/Header/HeaderDesignStyle';

//UseNavigation
import { useNavigation } from '@react-navigation/native';

//svgs
import BackIcon from 'assets/svg/Back Icon';

const HeaderDesign = ({
    params,
    leftContainer = true,
    name
}) => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={styles.backIcon}>
                    <BackIcon />
                </TouchableOpacity>

                <Text style={styles.name}>{name}</Text>
            </View>
        </View>
    );
}
export default HeaderDesign;
