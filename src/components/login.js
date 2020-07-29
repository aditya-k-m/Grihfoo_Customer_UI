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
          currentOTP: ""
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
    console.log(this.state.currentOTP);
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
        onChangeText={(value) => this.changeText(value)} />
        <TouchableOpacity onPress={() => this.submitNumber()} style={[s.btnTouchable, styles.buttons]} >
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
          <TextInput
          style={styles.textInput}
          placeholder="Enter OTP"
          value={this.state.currentOTP}
          onChangeText={(value) => this.changeOTP(value)} />
         <TouchableOpacity onPress={() => this.submitOTP()} style={[s.btnTouchable, styles.buttons]} >
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
    buttons: {
        paddingTop: 20,
        paddingLeft: 100,
        paddingRight: 100
    },
    modal: {
      backgroundColor:'white',
      maxHeight:Dimensions.get('window').height / 2
    }
});
