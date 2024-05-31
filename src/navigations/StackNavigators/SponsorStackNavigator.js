import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SponsorScreen from "../../screens/Sponsor/SponsorScreen";

import { navOptionHandler } from "../../utils/funtions";

const Stack = createStackNavigator();

export default function SponsorStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="赞 助" screenOptions={{
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
            <Stack.Screen name="赞 助" component={SponsorScreen} />
        </Stack.Navigator>
    )
}