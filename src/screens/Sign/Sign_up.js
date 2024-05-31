import React from "react";
import { View, Text, TextInput, ImageBackground, TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function Sign_up({ navigation }) {

    const handlePress = () => {
        navigation.navigate('Sign_in')
    }

    return (
        <ImageBackground style={styles.container} source={require('../../assets/1.jpg')}>
            <View style={styles.modal}>
                <TouchableHighlight style={styles.modalBtn1} onPress={handlePress}>
                    <View>
                        <Ionicons name="people-circle-outline" size={30} color='white' />
                        <Text style={styles.verticalText}>返回登录</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.modalReg}>
                    <View style={{ alignItems: 'center', marginBottom: 50 }}><Text style={{ color: 'red', fontWeight: 'bold', fontSize: 23 }} >注册</Text></View>
                    <View>
                        <View style={styles.input} >
                            <Ionicons name="person-outline" size={20} color='white' style={{ padding: 5 }} />
                            <TextInput
                                placeholder="UserName"
                                placeholderTextColor='white'
                                color='white'
                            />
                        </View>
                        <View style={styles.input} >
                            <Ionicons name="lock-open-outline" size={20} color='white' style={{ padding: 5 }} />
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor='white'
                                color='white'
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.input} >
                            <Ionicons name="lock-open-outline" size={20} color='white' style={{ padding: 5 }} />
                            <TextInput
                                placeholder="Confirm Password"
                                placeholderTextColor='white'
                                color='white'
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.input} >
                            <Ionicons name="person-outline" size={20} color='white' style={{ padding: 5 }} />
                            <TextInput
                                placeholder="ActualName"
                                placeholderTextColor='white'
                                color='white'
                            />
                        </View>
                        <View style={styles.input} >
                            <Ionicons name="lock-open-outline" size={20} color='white' style={{ padding: 5 }} />
                            <TextInput
                                placeholder="Payment Password"
                                placeholderTextColor='white'
                                color='white'
                                secureTextEntry={true}
                            />
                        </View>
                        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={handlePress} style={styles.button}><Text style={{ color: 'white' }}>注册</Text></TouchableHighlight>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}