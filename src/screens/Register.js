import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phoneNo: "",
            isModalVisible: false, //state of the visibility of OTP popup
        }
    }

    async callRegister() {
        try {
            await fetch('http://192.168.43.75:3000/register', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: formEncode({
                    'name': this.state.name,
                    'email': this.state.email,
                    'phoneNo': this.state.phoneNo
                }) //encode data and form the body of the post req
            })
        } catch (error) {
            console.log(error);
        };
    };

    upadteName(value) {
        this.setState({
            name: value
        });
    }

    updateEmail(value) {
        this.setState({
            email: value
        });
    }

    updatePhone(value) {
        this.setState({
            phoneNo: value
        });
    }

    submit() {
        console.log("Name: " + this.state.name);
        console.log("Email: " + this.state.email);
        console.log("Phone Number: " + this.state.phoneNo);
        this.callRegister();
        this.setState({
            isModalVisible: true
        });
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 34, fontWeight: 'bold', marginHorizontal: 45, marginTop: 30 }}>Register to GrihFoo !</Text>
                <View style={{ marginTop: 80, alignItems: 'center' }}>
                    <TextInput
                        placeholder="Enter your Name"
                        style={{ textAlign: 'center' }}
                        value={this.state.name}
                        onChangeText={(value) => this.upadteName(value)}
                    />
                    <TextInput
                        placeholder="Enter your emailId"
                        style={{ textAlign: 'center' }}
                        value={this.state.email}
                        onChangeText={(value) => this.updateEmail(value)}
                    />
                    <TextInput
                        placeholder="Enter your phone number"
                        style={{ textAlign: 'center' }}
                        value={this.state.phoneNo}
                        onChangeText={(value) => this.updatePhone(value)}
                    />
                    <TouchableOpacity onPress={() => this.submit()} style={{ backgroundColor: '#00b7c2', height: 40, width: 100, marginVertical: 30 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8, paddingLeft: 24 }}>Register</Text>
                    </TouchableOpacity>
                </View>

                <Modal animationIn="slideInUp"
                    animationOut="slideOutDown"
                    onBackdropPress={() => this.closeModal()}
                    isVisible={this.state.isModalVisible}
                    style={{
                        backgroundColor: 'white',
                        maxHeight: Dimensions.get('window').height / 2
                    }}>
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
                    <TouchableOpacity onPress={() => this.submit()} style={{
                        backgroundColor: '#00b7c2', height: 40, width: 100,
                        marginVertical: 30, marginHorizontal: 135
                    }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8, paddingLeft: 24 }}>Submit</Text>
                    </TouchableOpacity>
                </Modal>

            </View>
        )
    }


}

const styles = StyleSheet.create({
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
})


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