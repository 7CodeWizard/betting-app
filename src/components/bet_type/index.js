import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

import styles from "./styles";

export default function betType({ item, photo, handleMenu, styless, textStyle }) {

    return (
        <TouchableHighlight
            underlayColor="rgba(73,182,77,0.9)"
            onPress={handleMenu}
            style={styles.touch}
        >
            <View style={styless}>
                <Image style={styles.photo} source={photo} />
                <Text style={textStyle}>{item}</Text>
            </View>
        </TouchableHighlight>
    )
}