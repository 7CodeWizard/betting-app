import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/Home/HomeScreen";
import Description from "../screens/Description/Description";
import Discount from "../screens/Discounts/DiscountScreen"
import BottomTabNavigator from "./BottomTabNavigator";
import { navOptionHandler } from "../utils/funtions";
import Sign_in from "../screens/Sign/Sign_in";
import Sign_up from "../screens/Sign/Sign_up";

const Stack = createStackNavigator();

export default function AppContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
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
            }} initialRouteName="App">
                <Stack.Screen name="App" component={BottomTabNavigator} options={navOptionHandler} />
                <Stack.Screen name="Sign_up" component={Sign_up} options={navOptionHandler} />
                <Stack.Screen name="Sign_in" component={Sign_in} options={navOptionHandler} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}