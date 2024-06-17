import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, FlatList} from 'react-native';

const Home = ({route}) => {
    const {name, email} = route.params;

    // renderItem

    return (
        <View style={styles.container}>
            <View style={styles.contentBox}>
                <View>
                    <Text style={styles.userName}> {name}</Text>
                    <Text style={styles.userEmail}> {email}</Text>
                </View>
                <Image source={require('../assets/profile.png')} style={styles. profile} />
            </View>

            <View style={styles.search}>
                <View>
                    <Image source={require('../assets/magnify.png')} />
                    <TextInput
                    placeholder='Search o job or position'
                    />
                </View>
                <View>
                    <Image source={require('../assets/filter.png')} />
                </View>
            </View>

            <View>
                <View>
                    <Text>Featured Jobs</Text>
                    <Text>See all</Text>
                </View>
                {/* <FlatList
                data={}
                renderItem={}
                keyExtractor={}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                /> */}
            </View>

            <View>
                <View>
                    <Text>Popular Jobs</Text>
                    <Text>See all</Text>
                </View>
                {/* <FlatList
                data={}
                renderItem={}
                keyExtractor={}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                /> */}
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



})

export default Home ;