import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Description from "../../screens/Description/Description";
import Discount from "../../screens/Discounts/DiscountScreen";

import { navOptionHandler } from "../../utils/funtions";

const Stack = createStackNavigator();

export default function DiscountStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="优惠活动" screenOptions={{
            headerStyle: {
                backgroundColor: 'rgba(230,130,230,0.3)',
                height: 80,
                opacity: 0.9,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomWidth: 3,
                borderBottomColor: 'lightblue',
                shadowColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen name="优惠活动" component={Discount} />
            <Stack.Screen name="活动详情" component={Description} />
        </Stack.Navigator>
    )
}