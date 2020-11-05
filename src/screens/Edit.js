import React, { Component } from 'react';
import {Text,View,Image,TextInput} from 'react-native';
import { Button } from 'native-base';
import { withNavigation } from 'react-navigation';

class Edit extends Component{

    constructor(props){
        super(props);
        this.state={
            firstname : "",
            lastname : "",
            email : "",
            id : 14
        }
    }
    async show1() {
        try {
          await fetch('http://customergrihfoo.ap-south-1.elasticbeanstalk.com/gf/customer', {
            method: 'put',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: this.state.id,
                firstName: this.state.firstname,
                lastName: this.state.lastname,
                email: this.state.email
            })//encode data and form the body of the post req
          }).then((response) => console.log(response));
          // withNavigation().goBack();
        } catch (error) {
          console.log(error);
        };
      };
    updateFirstName(values){
       this.setState({
           firstname:values
       });
    }
    updateLastName(values){
        this.setState({
            lastname:values
        });
     }
    updateEmail(values){
        this.setState({
            email:values
        });
     }

     render(){
         return(
             <View>
                 <TextInput 
                   placeholder= 'Enter your firstname'
                   value = {this.state.firstname}
                   onChangeText ={(values)=>{this.updateFirstName(values)}}
                   style={{top:25,textAlign:'center',borderWidth:1}}
                 />
                 <TextInput 
                   placeholder= 'Enter your lastname'
                   value = {this.state.lastname}
                   onChangeText ={(values)=>{this.updateLastName(values)}}
                   style={{top:35,textAlign:'center',borderWidth:1}}
                 />
                 <TextInput 
                   placeholder= 'Enter your email '
                   value = {this.state.email}
                   onChangeText ={(values)=>{this.updateEmail(values)}}
                   style={{top:45,textAlign:'center',borderWidth:1}}
                 />
                 
                <Button onPress={()=>{this.show1()}}style={{fontSize:25,top:5,left:125,paddingRight:55,paddingLeft:55,marginTop:75,backgroundColor:'rgba(20,80,90,0.75)'}}><Text styles={{color: "white"}}>Submit</Text></Button>
             </View>
         )
     }

}
export default Edit;