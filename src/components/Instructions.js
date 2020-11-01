import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class HomeScreenCard extends Component {
    render() {
        return (
            <View style={styles.food}>
                <Text style={{fontSize:18}}>{this.props.point} </Text>
            </View>
        );
    }
}
export default HomeScreenCard;

const styles = StyleSheet.create({
    food:{
        width: 410,
        height:22,
        marginLeft: 1,
        marginRight: 20, 
        marginTop:20,  
        borderColor: 'black',
        backgroundColor:'white', 
        bottom:1,
        left:75
    },

    price:{
        left:335,
        bottom:27,
        fontSize:19
    }
});