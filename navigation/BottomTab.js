import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { RFValue } from 'react-native-responsive-fontsize';
import Switch from './Switch';
import Profile from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
// Supportive libraries: react-native-safe-area-context react-native-paper react-native-gesture-handler  react-native-reanimated react-native-screens @react-native-community/masked-view

const Tab = createMaterialBottomTabNavigator()

export default class BottomTab extends React.Component {

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator >
                    <Tab.Screen name='home' component={Switch} />
                    <Tab.Screen name='profile' component={Profile} />
                </Tab.Navigator>

            </NavigationContainer>
        )
    }
}