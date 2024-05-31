import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackNavigator from "./StackNavigators/HomeStackNavigator";
import DiscountStackNavigator from "./StackNavigators/DiscountStackNavigator";
import SponsorStackNavigator from "./StackNavigators/SponsorStackNavigator";

import { navOptionHandler } from "../utils/funtions";
import { Icon } from "@rneui/themed";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator initialRouteName="首页" screenOptions={({ route }) => ({
            tabBarStyle: {
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
                backgroundColor: '#eff',
                height: 45
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === '首页') {
                    iconName = 'home';
                } else if (route.name === '优惠') {
                    iconName = 'laptop';
                } else if (route.name === '赞助') {
                    iconName = 'message'
                }
                return (
                    <Icon name={iconName} color={focused ? 'tomato' : 'grey'} />
                )
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })} >
            <Tab.Screen name="首页" component={HomeStackNavigator} options={navOptionHandler} />
            <Tab.Screen name="优惠" component={DiscountStackNavigator} options={navOptionHandler} />
            <Tab.Screen name="赞助" component={SponsorStackNavigator} options={navOptionHandler} />
        </Tab.Navigator>
    )
}