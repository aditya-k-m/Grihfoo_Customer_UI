import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions,AppRegistry} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Login from '../src/components/login'
import Home from '../src/components/Home'

const screens = {
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    }
}

const loginStack = createStackNavigator(screens);

export default createAppContainer(loginStack);
