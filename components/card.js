import React, { memo } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { cardColor, Data } from '../constants/data';

const Card = memo(({ item, index }) => {
    const backgroundColor = cardColor[index % cardColor.length];
    const marginRight = index === Data.length - 1 ? 0 : 20;

    return (
        <View style={[styles.card, { backgroundColor, marginRight }]}>
            <ImageBackground
                source={require('../assets/abstructImage.png')}
                style={styles.cardBackground}
                imageStyle={styles.imageBackgroundStyle}
                resizeMode="cover"
            >
                <View style={styles.iconText}>
                    <View style={styles.logo}>
                        <Image source={item.Image} style={styles.cardImage} />
                    </View>
                    <View>
                        <Text style={styles.headerText}>{item.title}</Text>
                        <Text style={styles.subText}>{item.company}</Text>
                    </View>
                </View>
                <View style={styles.infoBlock}>
                    <Text style={styles.mainInfo}>{item.salary}</Text>
                    <Text style={styles.mainInfo}>{item.location}</Text>
                </View>
            </ImageBackground>
        </View>
    );
});

const styles = StyleSheet.create({
    card: {
        width: 280,
        height: 186,
        borderRadius: 24,
        paddingHorizontal: 30,
        paddingVertical: 28,
        marginTop: 25
    },
    cardBackground: {
        flex: 1,
    },
    imageBackgroundStyle: {
        opacity: 0.3
    },
    iconText: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
    },
    logo: {
        width: 46,
        height: 46,
        borderRadius: 12,
        backgroundColor: '#fff'
    },
    cardImage: {
        width: 30,
        height: 29.57,
        alignSelf: 'center',
        marginTop: 6.5
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 20.8,
        color: '#fff'
    },
    subText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        color: '#fff'
    },
    infoBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 70
    },
    mainInfo: {
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 24,
        color: '#fff'
    },
});

export default Card;
