import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import BrandScreen from '../screens/BrandScreen';
import InvScreen from "../screens/InvScreen";
import { styles } from "../style";


const Tab = createBottomTabNavigator();
export default function TabBar() {

    return(
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName='Dashboard'
                screenOptions={{
                    headerTitleStyle: {
                        fontSize: 35,
                        bottom: 10,
                    },
                    headerStyle: {
                        backgroundColor: "green",
                    },
                    tabBarShowLabel: false,
                    tabBarItemStyle: {
                        height: 90,
                    },
                    tabBarStyle: {
                       backgroundColor: "green",
                    }
                }}
            >
                <Tab.Screen 
                    name="Filaments" 
                    component={InvScreen} 
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            const icon = focused
                            ? require('../assets/Icons/300_filament_white.png') //icon-active.png
                            : require('../assets/Icons/300_filament_black.png'); //icon-inactive.png
                            <Image source={icon} />;

                            return <Image source={icon} style={styles.iconSize} />;
                        }
                    }}
                />
                <Tab.Screen 
                    name="Dashboard" 
                    component={HomeScreen} 
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            const icon = focused
                            ? require('../assets/Icons/300_dashboard_white.png') //icon-active.png
                            : require('../assets/Icons/300_dashboard_black.png'); //icon-inactive.png
                            <Image source={icon} />;

                            return <Image source={icon} style={styles.iconSize} />;
                        }
                    }}
                />
                <Tab.Screen 
                    name="Brands" 
                    component={BrandScreen} 
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            const icon = focused
                            ? require('../assets/Icons/300_brand_white.png') //icon-active.png
                            : require('../assets/Icons/300_brand_black.png'); //icon-inactive.png
                            <Image source={icon} />;

                            return <Image source={icon} style={styles.iconSize} />;
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}