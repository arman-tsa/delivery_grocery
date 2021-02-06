/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/MainStack/MainStack';

const main = () => (
    <NavigationContainer>
        <MainStack />
    </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => main);
