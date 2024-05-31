import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableHighlight } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Button, Input, Theme, Icon } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";

import { bankData } from "../../data/dataArray";
import styles from "./style";

import online from '../../assets/TabIcon/online.png'
import usdt from '../../assets/TabIcon/usdt.png'
import chat from '../../assets/TabIcon/chat.png'
import alipay from '../../assets/TabIcon/alipay.png'

const Tab = createMaterialTopTabNavigator();



export default function DepositScreen({ navigation }) {

    const handlePress = () => {
        navigation.navigate("首页1")
    }

    const Online = () => {
        const [Enable, setEnable] = useState("中国农业银行");
        return (
            <ScrollView style={styles.depositContainer}>
                <View style={styles.container}>
                    {
                        bankData.map((item, index) => {
                            return (
                                <View key={index} style={styles.bank}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.value}>{item.value}</Text>
                                    <View style={styles.button}><Button title="copy" type="clear" size="sm" /></View>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={styles.container}>
                    <View style={styles.formdata}>
                        <Text style={styles.formTitle}>开户银行</Text>
                        <Picker
                            selectedValue={Enable}
                            style={{ height: 50, width: '100%' }}
                            mode={"dialog"}
                            onValueChange={(itemValue) => setEnable(itemValue)}
                        >
                            <Picker.Item label="中国农业银行" value="中国农业银行" />
                            <Picker.Item label="中国银行" value="中国银行" />
                            <Picker.Item label="交通银行" value="交通银行" />
                            <Picker.Item label="工商银行" value="工商银行" />
                            <Picker.Item label="建设银行" value="建设银行" />
                            <Picker.Item label="中信银行" value="中信银行" />
                            <Picker.Item label="兴业银行" value="兴业银行" />
                            <Picker.Item label="光大银行" value="光大银行" />
                            <Picker.Item label="民生银行" value="民生银行" />
                        </Picker>
                    </View>
                    <View style={styles.formdata}>
                        <Text style={styles.formTitle}>存款人姓名</Text>
                        <Input placeholder="请输入存款人姓名" />
                        <Text style={{ fontSize: 10 }}>为及时到账，请务必输入正确的存款人姓名</Text>
                    </View>
                    <View style={styles.formdata}>
                        <Text style={styles.formTitle}>银行卡号</Text>
                        <Input placeholder="请输入银行卡号" />
                    </View>
                    <View style={styles.formdata}>
                        <Text style={styles.formTitle}>开户行地址</Text>
                        <Input placeholder="请输入开户行地址" />
                    </View>
                    <View style={styles.formdata}>
                        <Text style={styles.formTitle}>存款金额</Text>
                        <Input placeholder="请输入取款金额 100 - 1000000"
                            leftIcon={{ type: 'font-awesome', size: 17, name: 'dollar' }}
                            rightIcon={{ type: 'font-awesome', size: 17, name: 'yen' }}
                        />
                    </View>
                    <View style={styles.formdata}>
                        <Button title="立即存款" color="#4169e1" />
                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                            <Text>存款遇到问题？联系 </Text>
                            <TouchableHighlight onPress={handlePress}><Text style={{ color: 'blue' }}>人工客服</Text></TouchableHighlight>
                            <Text> 解决</Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
        )
    }

    const Usdt = () => {
        return (
            <ScrollView style={styles.depositContainer}>
                <View style={styles.container}>
                    <View style={styles.formdata}>
                        <Text style={styles.formTitle}>存款金额</Text>
                        <Input placeholder="请输入取款金额 0.00 - 0.00"
                            leftIcon={{ type: 'font-awesome', size: 17, name: 'dollar' }}
                            rightIcon={{ type: 'font-awesome', size: 17, name: 'yen' }}
                        />
                    </View>
                    <View style={styles.formdata}>
                        <Button title="立即存款" color="#4169e1" />
                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                            <Text>存款遇到问题？联系 </Text>
                            <TouchableHighlight onPress={handlePress}><Text style={{ color: 'blue' }}>人工客服</Text></TouchableHighlight>
                            <Text> 解决</Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
        )
    }

    return (
        <Tab.Navigator screenOptions={({ route, navigation }) => ({
            tabBarStyle: {
                backgroundColor: 'lightgreen'
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === '网银转账') {
                    iconName = online;
                } else if (route.name === 'USDT') {
                    iconName = usdt;
                } else if (route.name === '微信') {
                    iconName = chat
                } else {
                    iconName = alipay
                }
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}><Image source={iconName} style={{ width: 30, height: 30 }} /></View>
                )
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="网银转账" component={Online} />
            <Tab.Screen name="USDT" component={Usdt} />
            <Tab.Screen name="微信" component={Usdt} />
            <Tab.Screen name="支付宝" component={Usdt} />
        </Tab.Navigator>
    )
}