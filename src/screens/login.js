//authored, aditya_k_m

//importing depenmdencies
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Alert } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import Modal from 'react-native-modal';

//for using bootstrap styles package
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
const { styles: s, constants: c } = bootstrapStyleSheet;

//component object
export default class Login extends Component {

  //state initialization
  constructor(props) {
    super(props);
    this.state = {
      currentText: "", //state of phone number
      isModalVisible: false, //state of the visibility of OTP popup
      currentOTP: "", //+REMOVABLE+ --CHECK
      pin1: "", //state of 1st OTP digit
      pin2: "", //2nd OTP digit
      pin3: "", //3rd OTP digit 
      pin4: "", //4th OTP digit
      server_otp: "", //state of recording the OTP generated and sent by the srever via API call
      customer_id: '7'
    }
  }


  //async for API calls
  async getOTP() {
    try {
      await fetch('http://192.168.43.75:3000/generate-otp', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formEncode({ 'phoneNo': this.state.currentText }) //encode data and form the body of the post req
      })
        .then((response) => response.json())
        .then((generated_otp) => {
          //updating the server_otp state
          this.setState({
            server_otp: generated_otp
          });
        });
    } catch (error) {
      console.log(error);
    };
  };

  //function for updating the phone number's state 
  changeText(value) {
    this.setState({
      currentText: value
    });
  }

  //function to send entered phone number to the server and recieve the server generated OTP 
  submitNumber() {
    console.log("Phone Number: " + this.state.currentText);
    this.getOTP(); //updating the phon number to the server and getting OTP

    //Triggering the popup window
    this.setState({
      isModalVisible: true
    });
  }

  //update OTP state
  changeOTP(value) {
    this.setState({
      currentOTP: value
    });
  }

  //submit OTP and match to navigate to homepage
  submitOTP() {
    let enteredOTP = this.state.pin1 + this.state.pin2 + this.state.pin3 + this.state.pin4;
    let serverOTP = this.state.server_otp;
    if (enteredOTP.localeCompare(serverOTP) === 0) {
      console.log("Authentication Succeded");
      this.setState({currentText: ""});
      this.props.navigation.navigate('Home', {
        customer_id: this.state.customer_id
      });
    }
    else {
      console.log("Authentication Failed");
      Alert.alert(
        "Oops !",
        "Authentication Failed",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: true }
      );
    }
    this.setState({
      isModalVisible: false
    });
  }

  //close OTP popup
  closeModal() {
    this.setState({
      isModalVisible: false
    });
  }

  //navigate to Register screen
  navigateToRegister() {
    this.props.navigation.navigate('Register');
  }


  render() {
    return (
      <View>
        <View style={{ marginTop: 200 }}>
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
        </View>

        <View style={{ marginHorizontal: 90, marginTop: 225 }}>
          <TouchableOpacity onPress={() => this.navigateToRegister()}>
            <Text style={{ color: "blue", fontSize: 16 }}>New to GrihFoo ? Register Now !</Text>
          </TouchableOpacity>
        </View>

        <Modal animationIn="slideInUp"
          animationOut="slideOutDown"
          onBackdropPress={() => this.closeModal()}
          isVisible={this.state.isModalVisible}
          style={styles.modal}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>We've sent an OTP to your number</Text>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.6, justifyContent: 'space-evenly', flexDirection: "row" }}>
              <TextInput
                ref={'pin1ref'}
                maxLength={1}
                //placeholder = {"Enter your name"}
                onChangeText={(pin1) => {
                  this.setState({ pin1: pin1 })
                  if (pin1 != "") {
                    this.refs.pin2ref.focus()
                  }
                }}
                value={this.state.pin1}
                style={styles.OTPinput}
                keyboardType={'numeric'}

              />
              <TextInput
                ref={'pin2ref'}
                maxLength={1}
                onChangeText={(pin2) => {
                  this.setState({ pin2: pin2 })
                  if (pin2 != "") {
                    this.refs.pin3ref.focus()
                  }
                }}
                value={this.state.pin2}
                //placeholder = {"Enter your name"}
                style={styles.OTPinput}
                keyboardType={'numeric'}
              />
              <TextInput
                ref={'pin3ref'}
                maxLength={1}
                onChangeText={(pin3) => {
                  this.setState({ pin3: pin3 })
                  if (pin3 != "") {
                    this.refs.pin4ref.focus()
                  }
                }}
                value={this.state.pin3}
                //placeholder = {"Enter your name"}
                style={styles.OTPinput}
                keyboardType={'numeric'}
              />
              <TextInput
                ref={'pin4ref'}
                maxLength={1}
                onChangeText={(pin4) => {
                  this.setState({ pin4: pin4 })
                }
                }
                value={this.state.pin4}
                //placeholder = {"Enter your name"}
                style={styles.OTPinput}
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

//styles
const styles = StyleSheet.create({
  heading: {
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
  submitOTPButton: {
    paddingBottom: 10,
    paddingLeft: 100,
    paddingRight: 100
  },
  modal: {
    backgroundColor: 'white',
    maxHeight: Dimensions.get('window').height / 2
  },
  OTPinput: {
    backgroundColor: '#f5f4f2',
    justifyContent: 'center',
    fontWeight: '600',
    alignSelf: "center",
    fontSize: 18,
    height: 45,
    width: '10%',
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: 'grey',
    textAlign: 'center',
    marginBottom: 0
  }
});

//local methods
function formEncode(formdata) {
  let formBody = [];
  for (var property in formdata) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(formdata[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return formBody
}
