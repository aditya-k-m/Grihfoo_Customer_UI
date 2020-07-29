import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import Modal from 'react-native-modal';

const
  BODY_COLOR = '#000022',
  TEXT_MUTED = '#888888'; 

  const constants = {
    BODY_COLOR, TEXT_MUTED,
  };
  const classes = {
    title: {
      color: 'red',
    }
  };

const bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);
const {styles: s, constants: c} = bootstrapStyleSheet;

export default class Login extends Component{
  constructor(props){
      super(props);
      this.state={
          currentText:"",
          isModalVisible: false,
          currentOTP: "",
          pin1: "",
          pin2: "",
          pin3: "",
          pin4: ""
      }
  }  
  changeText(value){
      this.setState({
          currentText: value
      });
  }
  submitNumber(){
      console.log(this.state.currentText);
      this.setState({
        isModalVisible: true
      });
  }
  changeOTP(value){
    this.setState({
      currentOTP: value
    });
  }
  submitOTP(){
    console.log(this.state.pin1+this.state.pin2+this.state.pin3+this.state.pin4);
    this.setState({
      isModalVisible: false
    });
  }
  closeModal(){
    this.setState({
      isModalVisible: false
    });
  }


  render(){
    return(
      <View>
        <Text style={[s.h1, styles.heading]}>Verify your phone number</Text>
        <TextInput
        style={styles.textInput}
        placeholder="Enter your Number"
        value={this.state.currentText}
        keyboardType={'numeric'}
        onChangeText={(value) => this.changeText(value)} />
        <TouchableOpacity onPress={() => this.submitNumber()} style={[s.btnTouchable, styles.submitNumberButton]} >
         <View style={[s.btn, s.btnPrimary]}>
         <Text style={[s.btnText, s.btnTextPrimary]}>GET OTP</Text>
         </View>
        </TouchableOpacity>
        <Modal animationIn="slideInUp" 
        animationOut="slideOutDown" 
        onBackdropPress={() => this.closeModal()} 
        isVisible={this.state.isModalVisible}
        style={styles.modal}>
          <Text style={{textAlign:"center", fontWeight:"bold"}}>We've sent an OTP to your number</Text>
          <View style={{flex : 1}}>
          <View style={{flex:0.6,justifyContent:'space-evenly',flexDirection: "row"}}>
             <TextInput
                 ref={'pin1ref'}
                 maxLength={1}
                 //placeholder = {"Enter your name"}
                 onChangeText={(pin1)=>{
                 this.setState({pin1:pin1})
                 if(pin1 !=""){
                     this.refs.pin2ref.focus()
                 }
                 }}
                 value={this.state.pin1}
                 style = {styles.OTPinput}
                 keyboardType={'numeric'}
          
             />
             <TextInput 
                 ref={'pin2ref'}
                 maxLength={1}
                 onChangeText={(pin2)=>
                 {this.setState({pin2:pin2})
                 if(pin2 !=""){
                     this.refs.pin3ref.focus()
                 }
                 }}
                 value={this.state.pin2}
                 //placeholder = {"Enter your name"}
                 style = {styles.OTPinput}
                 keyboardType={'numeric'}
             />
             <TextInput 
                 ref={'pin3ref'}
                 maxLength={1}
                 onChangeText={(pin3)=>
                 {this.setState({pin3:pin3})
                 if(pin3 !=""){
                     this.refs.pin4ref.focus()
                 }
                 }}
                 value={this.state.pin3}
                 //placeholder = {"Enter your name"}
                 style = {styles.OTPinput}
                 keyboardType={'numeric'}
             />
            <TextInput 
                 ref={'pin4ref'}
                 maxLength={1}
                 onChangeText={(pin4)=> {this.setState({pin4:pin4})
                 }
                }
                 value={this.state.pin4}
                 //placeholder = {"Enter your name"}
                 style = {styles.OTPinput}
                 keyboardType={'numeric'}
             />
          </View>
      </View>
         <TouchableOpacity onPress={() => this.submitOTP()} style={[s.btnTouchable, styles.submitOTPButton]} >
           <View style={[s.btn, s.btnPrimary]}>
           <Text style={[s.btnText, s.btnTextPrimary]}>SUBMIT OTP</Text>
           </View>
         </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    heading:{
      fontSize: 30,
      padding: 6,
      paddingBottom: 5,
      textAlign: "center",
      fontWeight: "bold"
    },
    textInput: {
        textAlign: "center",
        height: 40,
        paddingLeft: 6
    },
    submitNumberButton: {
        paddingTop: 20,
        paddingLeft: 100,
        paddingRight: 100
    },
    submitOTPButton : {
      paddingBottom: 10,
      paddingLeft: 100,
      paddingRight: 100
    },
    modal: {
      backgroundColor:'white',
      maxHeight:Dimensions.get('window').height / 2
    },
    OTPinput: {backgroundColor: '#f5f4f2',
      justifyContent:'center',
      fontWeight: '600',
      alignSelf:"center",
      fontSize: 18,
      height:45,
      width:'10%',
      borderRadius: 30,
      borderWidth: 0.5, 
      borderColor: 'grey',
      textAlign:'center',
      marginBottom: 0
    }
});
