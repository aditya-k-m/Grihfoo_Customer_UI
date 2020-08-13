import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions,AppRegistry} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Login from '../src/components/login'
import Home from '../src/components/Home'

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: Home,
        navigationOptions : {
            headerShown: false
        }
    }
}

const loginStack = createStackNavigator(screens);

export default createAppContainer(loginStack);
