import React from "react";
import { View, Text, Image, TouchableHighlight, ScrollView } from "react-native";
import { discount } from "../../data/dataArray";
import styles from "./styles.js";

export default function Dis({ type, navigation }) {

    const handlePress = (index) => {
        navigation.navigate('活动详情', index + 3)
    }

    return (
        <ScrollView style={styles.discountContainer}>
            {
                type !== '全部' ? discount.map((item, index) => {
                    if (item.type == type) {
                        return (
                            <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" key={index} onPress={() => handlePress(index)} style={styles.touch}>
                                <View key={index} style={styles.container}>
                                    <Image source={item.photo_url} style={styles.photo} />
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    }
                }) :
                    discount.map((item, index) => {
                        return (
                            <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" key={index} onPress={() => handlePress(index)} style={styles.touch}>
                                <View key={index} style={styles.container}>
                                    <Image source={item.photo_url} style={styles.photo} />
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })
            }
            <View style={styles.endTitle}>
                <Text style={{ opacity: 0.3 }}>-----------------------------------     END     -----------------------------------</Text>
            </View>
        </ScrollView>
    )
}