import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';

import { tabTitle } from '../../data/dataArray';
import Dis from '../../components/discount';

const Tab = createMaterialTopTabNavigator();

const Discount = ({ navigation }) => {

    return (
        <Tab.Navigator screenOptions={{
            tabBarScrollEnabled: true,
            // tabBarStyle: { width: 'auto' },
            tabBarItemStyle: { width: 'auto' }
        }}>
            {
                tabTitle.map((item, index) => (
                    <Tab.Screen key={index} name={item.title}>
                        {() => <Dis type={item.title} navigation={navigation} />}
                    </Tab.Screen>
                ))
            }
        </Tab.Navigator>
    );
};

export default Discount;