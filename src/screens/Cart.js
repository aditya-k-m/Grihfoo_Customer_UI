import React, { Component } from 'react';
import {StyleSheet,Image,ScrollView} from 'react-native';
import { Input,Item,Container,Textarea,Form,Header,Content,Left, Body, Right, Title, Text, View} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';



export default class HeaderTitleExample extends Component {
    show1 =()=>
    {
        alert('Clicked')
    }
    clicked =()=>
    {
        alert('Clicked')
    }
  render() {
    return (
      <Container >
        
        <Header style={styles.container}>
          <Left/>
          <Body >
            <Title style={styles.head}>Your Cart</Title>
            <Image style={styles.image}source={require('../assets/HARSH.png')}/>
          </Body>
          <Right />
        </Header>
        <Header style={styles.itemname}>
            <Text style={styles.item}>Item Name</Text>
            <Text style={styles.price}>Price</Text>
        </Header>
        <Content style={styles.bottom}>
        <Text >
                    
                    Chole Bhature * 4{'\n'}{'\n'}{'\n'}
                    Dal Makhani * 2{'\n'}{'\n'}{'\n'}
                    Mango Pickle * 1{'\n'}{'\n'}{'\n'}
        </Text>
        <Text style={styles.priced}>
                    
                    100{'\n'}{'\n'}{'\n'}
                    150{'\n'}{'\n'}{'\n'}
                    200{'\n'}{'\n'}{'\n'}
        </Text>
        <Text style={styles.bar}>------------------------------------------------------------------------------------------------</Text>
       </Content> 
       
       <Text style={styles.instructions}>Add Instructions To the Homemaker</Text>
       
         <Content style={styles.box}>
           <Item style={{left:110,marginRight:250}}>
           <Text style={styles.third}>
                    1.Food Needs to be spicy{'\n'}
                    2.Food Needs to be hot and Fresh{'\n'}
                    3.Less oily and more salty food{'\n'}
                </Text>
            {/* <Input style={styles.third}  /> */}
           </Item> 
        </Content>
        
        <Button onPress={this.show1} style={styles.last}><Text style={{color:'white'}}>Add More Items</Text></Button>
        
        <Button onPress={this.show1}style={styles.secondlast}><Text style={{color:'white'}}>Proceed to Request Homemaker</Text></Button>
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
        top:30,
        backgroundColor:'white',
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
        top:45,
        left:10,
    },
    priced:{
        left:340,
        bottom:191
    },
    bar:{
        bottom:240,   
    },
    box:{
      top:20,
      
    },
    instructions:{
        left:65,
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
      
        padding:20,
        paddingRight:9,
        paddingLeft:35,
    }
})