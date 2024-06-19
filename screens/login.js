import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

const Login = ({navigation}) => {
    const [name, setName] = useState ('');
    const [email, setEmail] = useState ('');

    const handlelogin = () => {
        navigation.navigate('Home', {name, email});
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>Jobizz</Text>
                <Text style={styles.welcomText}>Welcome Back👋</Text>
                <Text style={styles.subText}>Let's login. Apply to jobs</Text>

                <View style={styles.inputFields}>
                    <TextInput
                    style={styles.userName}
                    placeholder='Name'
                    value={name}
                    onChangeText={setName}
                    />

                    <TextInput
                    style={styles.userEmail}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    />

                    <TouchableOpacity style={styles.submitBtn} onPress={handlelogin}>
                        <Text style={styles.loginText}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.continue}>
                    <View  style={styles.line}/>
                    <Text style={styles.continueText}>Or continue with</Text>
                    <View style={styles.line}/>
                </View>
                <View style={styles.loginOptions}>
                    <Image source={require('../assets/apple.png')} style={styles.brandLogo} />
                    <Image source={require('../assets/google.png')} style={styles.brandLogo}/>
                    <Image source={require('../assets/facebook.png')} style={styles.brandLogo}/>
                </View>

                <Text style={styles.register}>
                    Haven't an account? 
                    <Text style={styles.registerLink}> Register</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#FAFAFD',
        paddingLeft: 23,
        paddingTop: 110
    },

    logo: {
        fontSize: 22,
        color:'#356899',
        fontWeight: '600',
        marginTop: 18,
        marginBottom: 9,
        // paddingLeft: 17
    },
    welcomText: {
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 33.6
    },
    subText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22.4,
        color: '#5e5e63'
    },
    inputFields: {
        marginTop: 30
    },
    userName: {
        width: 350,
        height: 52,
        borderWidth: 1,
        borderColor: '#AFB0B6',
        borderRadius: 10,
        paddingLeft: 18
    },
    userEmail: {
        width: 350,
        height: 52,
        borderWidth: 1,
        borderColor: '#AFB0B6',
        borderRadius: 10,
        paddingLeft: 18,
        marginTop: 20
    },
    submitBtn: {
        width: 349,
        height: 52,
        marginTop:20,
        backgroundColor: '#356899',
        // marginLeft: 9,
        borderRadius: 5,
    },
    loginText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        paddingTop: 15,
        color: '#fff'
    },
    continue: {
        marginTop: 67,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
    line: {
        borderWidth: 0.5,
        height: 1,
        width: 120,
        borderColor: '#AFB0B6'
    },
    continueText: {
        fontSize: 13,
        fontWeight: '400',
        color: '#AFB0B6',
        lineHeight: 16.44
    },
    loginOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 49,
        marginTop: 38
    },
    brandLogo: {
        width: 32,
        height: 32
    },
    register: {
        alignSelf: 'center',
        marginTop: 68,
        color: '#AFB0B6',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 17.71
    },
    registerLink: {
        color: '#356899',
    },
})

export default Login ;