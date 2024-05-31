import React, { useRef, useState } from "react";
import { Text, View, Image, ScrollView, TouchableHighlight } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import MarqueeText from 'react-native-marquee';

import { photo_array, button, bet_type } from "../../data/dataArray";
import ButtonMap from '../../components/button';
import BetMap from "../../components/bet_type";
import Physical from "../../components/physical"
import styles from './styles'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {

    const handlePress = (index) => {
        navigation.navigate('活动详情', index)
    }
    const depositPress = () => {
        navigation.navigate("存款")
    }

    const renderImage = ({ item, index }) => (
        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => handlePress(index)} key={index}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.photo_url} />
            </View>
        </TouchableHighlight>
    );

    const [activeSlide, setActiveSlide] = useState(0);

    const handleBet = (index) => {

    }

    const [handleindex, sethandleIndex] = useState(0);
    const sliderRef = useRef();

    const handleMenu = (index) => {
        sethandleIndex(index)
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.carouselContainer}>
                <View style={styles.carousel}>
                    <Carousel
                        ref={sliderRef}
                        data={photo_array}
                        renderItem={renderImage}
                        sliderWidth={viewportWidth}
                        itemWidth={viewportWidth}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                        firstItem={0}
                        loop={true}
                        autoplay={true}
                        autoplayDelay={3000}
                        autoplayInterval={3000}
                        onSnapToItem={(index) => setActiveSlide(index)}
                    />
                    <Pagination
                        dotsLength={photo_array.length}
                        activeDotIndex={activeSlide}
                        containerStyle={styles.paginationContainer}
                        dotColor="#4f91f5"
                        dotStyle={styles.paginationDot}
                        inactiveDotColor="#65776b"
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        carouselRef={sliderRef.current}
                        tappableDots={!!sliderRef.current}
                    />
                </View>
            </View>
            <View style={styles.marqueeContainer}>
                <MarqueeText
                    style={styles.marquee}
                    speed={0.1}
                    marqueeOnStart={true}
                    loop={true}
                    delay={1000}
                >
                    ★★★尊敬的客户：我司亚博体育场馆比分系统于2020年7月7日（星期二）11:00-13:35进行滚球比分系统维护，维护期间将无法查看比分，可以正常游戏，给您带来不便敬请谅解，谢谢。
                </MarqueeText>
                <View style={styles.marqueeBottom}>
                    <View style={{ width: (viewportWidth - 40) * 0.35 }}>
                        <Text style={{ fontSize: 20 }}>Jaron Gaston</Text>
                        <Text style={{ fontSize: 25 }}>$0.00</Text>
                        <Text>www.wingkong.com</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: (viewportWidth - 40) * 0.65 }}>
                        {
                            button.map((item, index) => {
                                return (
                                    <ButtonMap key={index} item={item} onPress={depositPress} />
                                )
                            })
                        }
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', padding: 10, paddingTop: 0, maxHeight: viewportHeight * 0.55 }}>
                <View style={styles.bet}>
                    {bet_type.map((item, index) => {
                        return (
                            <BetMap
                                key={index}
                                styless={index === handleindex ? styles.active : styles.photoContainer}
                                textStyle={index === handleindex ? styles.textColor : ''}
                                item={item.title}
                                photo={item.photo_url}
                                onPress={handleBet}
                                handleMenu={() => handleMenu(index)}
                            />
                        )
                    })}
                </View>
                <ScrollView>
                    <Physical index={handleindex} />
                </ScrollView>
            </View>
        </ScrollView>
    )
}