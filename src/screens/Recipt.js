import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default class Recipt extends Component {
    render() {
        return (
            <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Order ID: NJKISER3434</Text>
                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold' }}>Order Details</Text>
                        <View style={{ paddingVertical: 10 }}>
                            <Text>Dal Makhni & Rice</Text>
                            <Text>Gulaab Jamun</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold' }}>Quantity</Text>
                        <View style={{ paddingVertical: 10 }}>
                            <Text> 1</Text>
                            <Text> 2</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold' }}>Price</Text>
                        <View style={{ paddingVertical: 10 }}>
                            <Text>₹ 84/-</Text>
                            <Text>₹ 10/-</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginLeft: 240, marginTop: 150 }}>
                    <Text>Total Price: ₹ 94/-</Text>
                    <Text>CGST & SGST: 18%</Text>
                    <Text>Total: ₹ 111</Text>
                </View>
                <TextInput placeholder='Enter coupon code' style={{ borderWidth: 1, borderColor: '#dddddd', marginTop: 30, marginBottom: 10 }}></TextInput>
                <TouchableOpacity style={{ backgroundColor: '#00b7c2', height: 40, width: 100, marginVertical: 10 }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8, paddingLeft: 28 }}>Apply</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#00b7c2', height: 40, marginVertical: 10, flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8 }}>Proceed to pay</Text>
                </TouchableOpacity>
            </View>
        );
    }
}