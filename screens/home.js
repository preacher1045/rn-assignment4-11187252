import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, FlatList, ImageBackground} from 'react-native';
import { Data, cardColor } from '../constants/data';

const Home = ({route}) => {
    const {name, email} = route.params;

    const renderFeatureJob = ({ item, index }) => (
        <View style={[styles.card, { backgroundColor: cardColor[index % cardColor.length], marginRight: index === Data.length - 1 ? 0 : 20  }]}>
            <ImageBackground
            source={require('../assets/abstructImage.png')}
            style={styles.cardBackground}
            imageStyle={styles.imageBackgroundStyle}
            resizeMode="cover"
            >
                <View>
                    <View>
                        <Image source={item.Image}/>
                    </View>
                    <Text>{item.title}</Text>
                </View>
                <View>
                    <Text>{item.salary}</Text>
                    <Text>{item.location}</Text>
                </View>
            </ImageBackground>
        </View>
    );

        
    return (
        <View style={styles.container}>
            <View style={styles.contentBox}>
                <View>
                    <Text style={styles.userName}> {name}</Text>
                    <Text style={styles.userEmail}> {email}</Text>
                </View>
                <Image source={require('../assets/profile.png')} style={styles. profile} />
            </View>

            {/* Job search */}
            <View style={styles.search}>
                <View style={styles.searchBox}>
                    <Image source={require('../assets/magnify.png')} style={styles.mganifyImage} />
                    <TextInput placeholder='Search job or position' style={styles.searchText}/>
                </View>
                <View style={styles.searchFilter}>
                    <Image source={require('../assets/filter.png')} style={styles.searchFilterImage} />
                </View>
            </View>

            {/* Featured jobs */}
            <View>
                <View style={styles.feature}>
                    <Text style={styles.title}>Featured Jobs</Text>
                    <Text style={styles.subTitle}>See all</Text>
                </View>

                <FlatList
                data={Data}
                renderItem={renderFeatureJob}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                />
                
            </View>
        </View>
    );
}

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingVertical: 30,
        backgroundColor: '#FAFAFD'
    },
    contentBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        // gap: 150
    },
    userName: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 36,
        color: '#0D0D26'
    },
    userEmail: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 24,
        color: '#95969D'
    },
    profile: {
        width: 54,
        height: 54,
        marginRight: 20,
        borderRadius: 27
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 40,
        marginVertical: 40
    },
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5.5,
        backgroundColor: '#F2F2F3',
        width: 290,
        height: 48,
        paddingLeft: 20,
        borderRadius: 12
    },
    mganifyImage: {
        width: 21.64,
        height: 20.02
    },
    searchText: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 22.5
    },
    searchFilter: {
        width: 48,
        height: 48,
        backgroundColor: '#F2F2F3',
        borderRadius: 12,
        paddingTop: 15
    },
    searchFilterImage: {
        width: 17.33,
        height: 20,
        alignSelf: 'center',
    },
    feature: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 40
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 20.8
    },
    subTitle: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.8,
        color: '#95969D'
    },
    card: {
        width: 280,
        height: 186,
        borderRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    cardBackground: {
        flex: 1,
    },
    imageBackgroundStyle: {
        opacity: 0.3
    },
})

export default Home ;