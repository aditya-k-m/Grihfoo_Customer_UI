import React,{Component} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import HyperLink from 'react-native-hyperlink';


export default class Profile extends Component{
    show1 =()=>
    {
        alert('Clicked')
    }
    clicked =()=>
    {
        alert('Clicked')
    }
    render()
    {
        return (
        <View>     
            <View style={styles.pending} >
                <Text><Button title='Pending' ></Button></Text>
            </View>
            <View style={styles.customerSuport} >     
                <Text ><Button title='Customer Support' /></Text>
            </View>
            <View style={styles.Logout} >
                <Text><Button title='Logout'></Button></Text>
            </View>
            <View style={styles.ongoing}>
                <Text><Button title='Ongoing'></Button></Text>
            </View>
            <View style={styles.past}> 
                <Text><Button title='Past'></Button></Text>
            </View>
            <Text style={styles.faq}>
                FAQs
            </Text>
            <View style={styles.textbox}>
                <Text style={{left:7}}>
                    A paragraph of text with an unassigned HyperLink.{'\n'}
                    A second row with a web link
                </Text>
            </View>
            <Text style = {styles.order}>Your Orders</Text>
            <View style={styles.upper}>
                <Text style={{left:7,top:10}}>
                    Name: Harshit Choudhary{'\n'}
                    Address:204A Nagenahalli Bangalore{'\n'}
                    Email:harshorton@gmail.Com{'\n'}
                    Phone: 9148055977{'\n'}
                </Text>
            </View>
            <Text style={{fontSize:22,bottom:427}}>Personal Information</Text>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    customerSuport:{
        flex:1,
        right: 20,
        top: 345,
        fontSize: 50,
        margin: 30,
    },
    Logout:{
        flex:1,
        right:10,
        top: 350,
        fontSize: 50,
        margin:20,
       
    },
    textbox :{
        height: 120,
        borderTopWidth: 2,
        borderBottomWidth:2,
        top : 55,
        backgroundColor:'#cdb30c',
    },
    faq:{
        top:50,
        left:8,
    },
    pending:{
        top:205,
        left:10,
        marginTop:5,

    },
    ongoing:{
        left: 145,
        top:70,
    },
    past:{
        left:290,
        top:35
    },
    order:{
        bottom:180,
        left: 114,
        fontSize: 25,
        
    },
    upper:{
        height: 90,
        borderTopWidth: 2,
        borderBottomWidth:2,
        bottom: 310,
        backgroundColor:'#cdb30c',
    }
    
})
