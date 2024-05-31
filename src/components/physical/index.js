import React from "react";
import { View, Image, TouchableHighlight, FlatList, ScrollView, SectionList } from "react-native";

import { sportsData } from "../../data/dataArray";
import styles from "./styles";

export default function betType({ index }) {

    const onPressRecipe = (item) => {
        // navigation.navigate("Recipe", { item });
    };

    const renderSports = (item) => (
        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)} style={styles.touch} key={item.id}>
            <View style={styles.container}>
                <Image key={item.id} style={index == 4 && styles.photo2 || index == 3 && styles.photo3 || styles.photo} source={item.photo_url} />
            </View>
        </TouchableHighlight>
    );
    const renderSports1 = (item) => (
        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)} style={styles.touch} key={item.id}>
            <View style={styles.container}>
                <Image key={item.id} style={styles.photo} source={item.photo_url} />
            </View>
        </TouchableHighlight>
    );
    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {index !== 5 ? (
                // <FlatList
                //     numColumns={2}
                //     data={sportsData[index]}
                //     renderItem={renderSports}
                //     keyExtractor={(item) => item.id}
                // />
                sportsData[index].map((item) => renderSports(item))
            ) : (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableHighlight
                        underlayColor="rgba(73,182,77,0.9)"
                        onPress={() => onPressRecipe()}
                        style={styles.touch}
                    >
                        <View style={styles.container1}>
                            <Image
                                key={1}
                                style={styles.photo1}
                                source={require("../../assets/lottery/1.png")}
                            />
                        </View>
                    </TouchableHighlight>
                    {sportsData[index].map((item) => renderSports1(item))}
                </View>
            )}
        </View>
    )
}