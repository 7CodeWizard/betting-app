import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/Home/HomeScreen";
import Description from "../../screens/Description/Description";
import DepositScreen from "../../screens/Deposit/DepositScreen";

import { navOptionHandler } from "../../utils/funtions";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="首页1" screenOptions={{
            headerStyle: {
                backgroundColor: 'rgba(230,130,230,0.3)',
                opacity: 0.9,
                height: 80,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomWidth: 3,
                borderBottomColor: 'lightblue',
                shadowColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen name="首页1" component={HomeScreen} options={navOptionHandler} />
            <Stack.Screen name="活动详情" component={Description} />
            <Stack.Screen name="存款" component={DepositScreen} />
        </Stack.Navigator>
    )
}