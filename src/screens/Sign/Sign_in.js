import React from "react";
import { View, Text, TextInput, ImageBackground, TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function Sign_in({ navigation }) {

    const handlePress = () => {
        navigation.navigate('Sign_up')
    }

    const handleLog = () => {
        navigation.navigate('App')
    }

    return (
        <ImageBackground style={styles.container} source={require('../../assets/1.jpg')}>
            <View style={styles.modal}>
                <View style={styles.modalLog}>
                    <View style={{ alignItems: 'center', marginBottom: 50 }}><Text style={{ color: 'red', fontWeight: 'bold', fontSize: 23 }} >登录</Text></View>
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
                        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={handlePress} style={styles.button}><Text style={{ color: 'white' }}>登录</Text></TouchableHighlight>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 }}>
                            <TouchableHighlight underlayColor="rgba(73,182,77,0.5)" onPress={handleLog}><Text style={{ color: 'white' }}>先去逛逛</Text></TouchableHighlight>
                            <TouchableHighlight underlayColor="rgba(73,182,77,0.5)" onPress={handlePress}><Text style={{ color: 'white' }}>在线客服</Text></TouchableHighlight>
                        </View>
                    </View>
                </View>
                <TouchableHighlight style={styles.modalBtn} onPress={handlePress}>
                    <View>
                        <Ionicons name="people-circle-outline" size={30} color='white' />
                        <Text style={styles.verticalText}>注册新用户</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    )
}