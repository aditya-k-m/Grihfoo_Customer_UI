import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class OrderCard extends Component {
    render() {
        return (
            <View style={{ width: 370, marginLeft: 20, marginRight: 20, marginTop:10, borderWidth: 1, borderColor: '#dddddd', flexDirection: 'row' }}>
                <Image source={{uri: this.props.imageUri}}
                        style={{ height:130, width:130 }}
                    />
                <View style={{padding: 10}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{this.props.name} </Text>
                    <Text>from {this.props.chefName} </Text>
                      <View style={{ marginTop: 10 }}>
                         <Text>Order time: {this.props.time} </Text>
                         <Text>Order ID: {this.props.id} </Text>
                         <Text>Net Cost: ₹ {this.props.cost}/- </Text>
                      </View>
                </View>
            </View>
        );
    }
}
export default OrderCard;

const styles = StyleSheet.create({
});