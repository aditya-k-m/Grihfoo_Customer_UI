import React, { Component } from 'react';
import {StyleSheet,Image,ScrollView,Link} from 'react-native';
import { Input,Item,Container,Textarea,Form,Header,Content,Left, Body, Right, Title, Text, View} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import FoodData from '../components/FoodData';
import Instructions from '../components/Instructions';

export default class HeaderTitleExample extends Component {
    show1 =()=>
    {
        this.props.navigation.navigate('ChefPage')
    }
    clicked =()=>
    {
        alert('Clicked')
    }
    requestHomemaker = () => {
        this.props.navigation.navigate('Recipt');
    }
  render() {
    return (
      <Container >

        <Header style={styles.container}>
          <Left/>
          <Body >
            <Title style={styles.head}>Your Cart</Title>
            <Image style={styles.image}source={{uri: 'https://static.wixstatic.com/media/cd5c35_e4e3005990ea4a879a280fd6dfe3bdbf~mv2.jpg/v1/fill/w_312,h_318,al_c,q_80,usm_0.66_1.00_0.01/empty-dp.webp'}}/>
          </Body>
          <Right/>
        </Header>
        <Header style={styles.itemname}>
            <Text style={styles.item}>Item Name</Text>
            <Text style={styles.price}>Price</Text>
        </Header>
        <Content style={styles.bottom}>
          <FoodData
           dish= 'Chole Bhature * 4'
           price = '100'
          />
          <FoodData
           dish= 'Dal Makhani * 2'
           price = '150'
          />
          <FoodData
           dish= 'Mango Pickle * 1'
           price = '200'
          />
        </Content>
         <Content style={styles.box}>
         <Text style={{left:75,bottom:-5}}>Add Instructions To the Homemaker</Text>
               <Instructions
                point = '1.Food Needs to be spicy'
               />
              <Instructions
                point = '2.Food Needs to be hot and Fresh'
               />
               <Instructions
                point = '3.Less oily and more salty food'
               />
        </Content>

        <Button onPress={this.show1} style={styles.last}><Text style={{color:'white', fontSize: 14}}>Add More Items</Text></Button>

        <Button onPress={this.requestHomemaker} style={styles.secondlast}><Text style={{color:'white', fontSize: 14}}>Proceed to Request Homemaker</Text></Button>
      </Container>
    );
  }
}

const styles =StyleSheet.create({
     container:{
         backgroundColor:'#006a71',
     },
    head:{
        right:50,
        top:25,

    },
    image:{
        height:50,
        width:50,

        borderRadius:200,
        marginLeft:200,
        marginBottom:5,
        borderWidth:10,
        left:65,
        bottom:12

    },
    itemname:{
       backgroundColor:'white'
    },
    item:{
        top:10,
        right:130
    },
    price:{
         top:10,
         left:120
    },
    bottom:{
        top:15,
        left:10,
    },
    priced:{
        left:340,
        bottom:210
    },
    bar:{
        bottom:240,
    },
    box:{
      bottom:20,
      borderWidth:2,
      marginBottom:40,

    },
    last:{
        bottom:30,
        right:10,
        backgroundColor:'#006a71',
        marginLeft:110,
        marginRight:115,
        color:'white'
    },
    secondlast:{
        backgroundColor:'#006a71',
        marginLeft:40,
        marginRight:35,
        right:10,
        bottom:15,
    },
    third:{
        borderWidth: 2,
        marginLeft:-50,
        marginRight:-70,

        padding:15,
        paddingRight:9,
        paddingLeft:35,
    }
})
