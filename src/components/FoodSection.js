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
               
                <Image source={{uri: this.props.imageUri}}
                        style={{ height:130, width:130 }}
                    />
                <View style={{padding: 10}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{this.props.name} </Text>
                      <View style={{ marginTop: 10 }}>
                         <Text>Ratings: {this.props.rating} </Text>
                         <Text>Order by: {this.props.by} </Text>
                         <Button style={{marginLeft:200,top:15}}>+Add</Button>
                      </View>
                </View>
                    
            </View>
        );
    }
}
export default HomeScreenCard;

const styles = StyleSheet.create({
    food:{
        width: 410,
        height:132,
        marginLeft: 1,
        marginRight: 20, 
        marginTop:10, 
        borderWidth: 1, 
        borderColor: 'black',
        backgroundColor:'#f0ece3', 
        flexDirection: 'row',
        top:30
    }
});