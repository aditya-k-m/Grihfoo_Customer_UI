import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Cart extends Component{
    render()
    {
        return (
            <View style={{flex:1}}>
                <Text style = {styles.container}>CartScreen</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
   container: {
       fontSize: 40,
       paddingTop: 80,
   }
});