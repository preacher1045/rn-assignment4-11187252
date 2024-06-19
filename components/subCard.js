import React, { memo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SubCard = memo(({ item }) => {
    return (
        <View style={styles.popularcard}>
            <Image source={item.Image} style={styles.logo}/>
            <View style={styles.flexInfo}>
                <View style={styles.title}>
                    <Text>{item.title}</Text>
                    <Text>{item.company}</Text>
                </View>
                <View style={styles.popularInfo}>
                    <Text style={styles.rightInfo}>{item.salary}</Text>
                    <Text style={styles.rightInfo}>{item.location}</Text>
                </View>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    popularcard: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 10,
        marginBottom: 10,
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    flexInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        paddingLeft: 10
    },
    textInfo: {
        flexDirection: 'column',
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    subText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#95969D',
    },
    popularInfo: {
        alignItems: 'flex-end',
    },
    salaryText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    locationText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#95969D',
    },
});

export default SubCard;
