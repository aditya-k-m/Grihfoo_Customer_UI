import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

class HomeScreenCard extends Component {
    render() {
        return (
            <View style={styles.food}>
                <View style={{padding: 10}}>


                    {/* Cart Dish Details Props */}
                    
                      <View>
                         <Text style={{fontSize:19}}>{this.props.dish} </Text>
                         <Text style={styles.price}>{this.props.price} </Text>
                      </View>
                </View>
                <Text style={{fontSize:10}}>{this.props.point} </Text>
                  
            </View>
        );
    }
}
export default HomeScreenCard;

const styles = StyleSheet.create({
    food:{
        width: 410,
        height:52,
        marginLeft: 1,
        marginRight: 20, 
        marginTop:10,  
        borderColor: 'black',
        backgroundColor:'white', 
        flexDirection: 'row',
        bottom:20,
        right:2,
        
    },

    price:{
        left:335,
        bottom:27,
        fontSize:19
    }
});