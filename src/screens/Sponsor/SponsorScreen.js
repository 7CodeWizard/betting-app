import React from "react";
import { View, Text, Image, ScrollView, TouchableHighlight } from "react-native";

import { sponsorData } from "../../data/dataArray";
import styles from "./styles";

export default function SponsorScreen({ navigation }) {
    const handlePress = () => {
        navigation.navigate("Sign_in")
    }
    return (
        <ScrollView style={styles.sponsorContainer}>
            {
                sponsorData.map((item, index) => {
                    return (
                        <TouchableHighlight onPress={handlePress} underlayColor="rgba(73,182,77,0.9)" key={index} style={styles.touch}>
                            <View style={styles.container}>
                                <View style={styles.detail}>
                                    <Image source={item.mark} style={styles.mark} />
                                    <Text style={styles.title}>{item.team_name}</Text>
                                    <Text>{item.detail}</Text>
                                </View>
                                <View style={styles.pic}>
                                    <Image source={item.photo_url} style={styles.photo} />
                                </View>
                            </View>
                        </TouchableHighlight>
                    )
                })
            }
            <View style={styles.endTitle}>
                <Text style={{ opacity: 0.3 }}>-------------------------------     没有更多了     -------------------------------</Text>
            </View>
        </ScrollView>
    )
}