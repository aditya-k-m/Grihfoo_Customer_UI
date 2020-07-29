import React, {Component} from 'react'
import {StyleSheet, AppRegistry, Text, View} from 'react-native'
import Login from './src/components/login'

export default class khaana extends Component{
  render(){
    return(
      <View>
        <View style={styles.login}>
        <Login />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    marginTop: 280
  }
})

AppRegistry.registerComponent('khaana', () => khanna);