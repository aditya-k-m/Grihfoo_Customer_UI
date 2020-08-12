import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

import LoginStack from './routes/loginStack';

export default class App extends Component {
  render(){
    return(
      <View>
      <LoginStack />
      </View>
    )
  }
}

