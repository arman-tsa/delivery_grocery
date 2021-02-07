import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import HeaderDesign from 'src/Components/Header/HeaderDesign';

import { styles } from './ProfileStyle';

import { Colors } from 'global/index'

import TermCondition from 'assets/svg/P-Terms&Conditions';
import PrivacyPolicy from 'assets/svg/P-PrivacyPolicy';
import ContactUs from 'assets/svg/CU-phone';
import AboutUs from 'assets/svg/P-AboutUs3';
import FAQs from 'assets/svg/P-FAQs';
import Logout from 'assets/svg/P-Logout';


const ProfileScreen = ({
    params,
}) => {

    const profileData=[
        {name:'Terms & Conition',},
        {name:'Privacy Policy',},
        {name:'Contact Us',},
        {name:'About Us',},
        {name:'FAQs',},
        {name:'Logout',}
    ]

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.ORANGE_YELLOW} />
            <HeaderDesign name="Your Profile" />
        </View>
    );
}
export default ProfileScreen;
