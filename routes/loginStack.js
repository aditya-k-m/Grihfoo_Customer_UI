import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Login from '../src/screens/login'
import Home from '../src/screens/Home'
import Recipt from '../src/screens/Recipt'
import CompletedOrders from '../src/screens/CompletedOrders'
import PendingOrders from '../src/screens/PendingOrders'
import OngoingOrders from '../src/screens/OngoingOrders'
import ChefPage from '../src/screens/ChefPage'
import Register from '../src/screens/Register'

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    CompletedOrders: {
        screen: CompletedOrders,
        navigationOptions: {
            headerShown: false
        }
    },
    PendingOrders: {
        screen: PendingOrders,
        navigationOptions: {
            headerShown: false
        }
    },
    OngoingOrders: {
        screen: OngoingOrders,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    },
    Recipt: {
        screen: Recipt,
        navigationOptions: {
            headerShown: true
        }
    },
    ChefPage: {
        screen: ChefPage,
        navigationOptions: {
            headerShown: false
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerShown: false
        }
    }
}

const loginStack = createStackNavigator(screens);

export default createAppContainer(loginStack);
