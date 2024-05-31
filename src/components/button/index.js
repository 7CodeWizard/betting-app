import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";

import styles from "./styles";

export default function Button({ item, onPress }) {
    return (
        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={onPress} style={styles.touch}>
            <View style={styles.buttonContainer}>
                {item.title == '存款' && <Image style={styles.button} source={require(`../../assets/marquee/Deposit.png`)} />}
                {item.title == '取款' && <Image style={styles.button} source={require(`../../assets/marquee/Withdraw.png`)} />}
                {item.title == '转账' && <Image style={styles.button} source={require(`../../assets/marquee/Transfer.png`)} />}
                {item.title == 'VIP' && <Image style={styles.button} source={require(`../../assets/marquee/VIP.png`)} />}
                <Text>{item.title}</Text>
            </View>
        </TouchableHighlight>
    )
}