import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import OrderCard from '../components/OrderCard';
import VectorIcon from 'react-native-vector-icons/AntDesign';

export default class PendingOrders extends Component {

    backClicked() {
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View>
                <View style={{marginHorizontal: 20, paddingVertical: 20, flexDirection:'row' }}>
                    <TouchableOpacity onPress={ () => this.backClicked() }>
                        <VectorIcon name='arrowleft' size={34} style={{ paddingTop:7 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 34, fontWeight: 'bold', paddingLeft: 20 }}>Pending Orders</Text>
                </View>
                <ScrollView contentContainerStyle={{ paddingBottom: 95 }}>
                     <OrderCard imageUri='https://www.cooktube.in/wp-content/uploads/2016/10/paneer-tikka-masala.jpg'
                      name='Paneer Tikka Masala'
                      chefName='Chef Nirvi'
                      time='08:48 pm'
                      id='NJKI88976UIO8'
                      cost='78' />
                     <OrderCard imageUri='https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2013/04/bhindi-masala-recipe-11-500x500.jpg'
                      name='Bhindi Masala'
                      chefName='Chef Ranjitha'
                      time='08:48 pm'
                      id='NJKI88976UIO8'
                      cost='45' />
                     <OrderCard imageUri='https://5.imimg.com/data5/YB/FP/MY-24215181/apple-juice-500x500.jpg'
                      name='Apple Juice'
                      chefName='Chef Sukrutha'
                      time='08:48 pm'
                      id='NJKI88976UIO8'
                      cost='48' />
                     <OrderCard imageUri='https://www.whiskaffair.com/wp-content/uploads/2019/06/Aloo-Paratha-1-3-500x500.jpg'
                      name='Aloo Paratha'
                      chefName='Chef Priya'
                      time='08:48 pm'
                      id='NJKI88976UIO8'
                      cost='54' />
                     <OrderCard imageUri='https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2018/10/butter-naan-recipe-1.jpg'
                      name='Butter Naan'
                      chefName='Chef Nimrat'
                      time='08:48 pm'
                      id='NJKI88976UIO8'
                      cost='91' />
                     <OrderCard imageUri='https://www.cookwithmanali.com/wp-content/uploads/2014/08/Dal-Tadka-500x375.jpg'
                      name='Dal Tadka'
                      chefName='Chef Nirvi'
                      time='08:48 pm'
                      id='NJKI88976UIO8'
                      cost='85' />
                 </ScrollView>
            </View>
        )
    }
}

