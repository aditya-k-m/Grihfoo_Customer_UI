import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';
import VectorIcon from 'react-native-vector-icons/AntDesign';

// import App from './Hello';



export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            firstname: "",
            lastname: "",
            email: ""
        }
    }

    async componentDidMount() {
        try {
            fetch('http://customergrihfoo.ap-south-1.elasticbeanstalk.com/gf/customer/7')
                .then((response) => response.json())
                .then((personalInfo) => {
                    this.setState({
                        id: personalInfo.id,
                        firstname: personalInfo.firstName,
                        lastname: personalInfo.lastName,
                        email: personalInfo.email
                    });
                    console.log(personalInfo);
                });
        }
        catch (error) {
            console.log(error);
        }
    }

    show1 = () => {
        alert('Clicked')
    }
    clicked = () => {
        this.props.navigation.navigate('YourOrders');
    }
    completedOrders = () => {
        this.props.navigation.navigate('CompletedOrders');
    }
    ongoingOrders = () => {
        this.props.navigation.navigate('OngoingOrders');
    }
    pendingOrders = () => {
        this.props.navigation.navigate('PendingOrders');
    }
    toEdit = () => {
        this.props.navigation.navigate('Edit');
    }
    render() {
        return (

            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.head}>
                        <Text style={styles.hi}>Hi, {this.state.firstname} !</Text>

                        {/* Picture */}
                        <Image style={styles.image} source={{uri: 'https://static.wixstatic.com/media/cd5c35_e4e3005990ea4a879a280fd6dfe3bdbf~mv2.jpg/v1/fill/w_312,h_318,al_c,q_80,usm_0.66_1.00_0.01/empty-dp.webp'}} />
                    </View>

                    <View style={styles.box}>
                        {/* Personal Information Heading */}
                        <Text style={styles.top}>Personal Information</Text>
                        <TouchableOpacity onPress={this.toEdit}>
                            <View style={{ flexDirection: 'row', marginLeft: 359 }}>

                                <VectorIcon name='edit' size={16} style={{ paddingTop: 3 }} />
                                <Text style={{ paddingLeft: 3 }}>Edit</Text>

                            </View>
                        </TouchableOpacity>
                        {/* Personal Information Tab */}

                        <Text style={styles.bottom}>

                            Name: {this.state.firstname + ' '+ this.state.lastname} {'\n'}
                            Email:{this.state.email}{'\n'}

                        </Text>

                    </View>


                    <View style={styles.box}>
                        <Text style={styles.top}>Order Details</Text>
                        <View style={styles.side}>
                            {/* Pending Orders Tab */}

                            <TouchableOpacity onPress={this.pendingOrders} style={styles.order}>

                                <Text style={styles.text}>Pending Orders</Text>

                            </TouchableOpacity>

                            {/* Ongoing Orders Tab */}
                            <TouchableOpacity onPress={this.ongoingOrders} style={styles.order}>

                                <Text style={styles.text}>Ongoing Orders</Text>

                            </TouchableOpacity>

                            {/* Past Orders Tab */}

                            <TouchableOpacity onPress={this.completedOrders} style={styles.order}>

                                <Text style={styles.text}>Completed Orders</Text>

                            </TouchableOpacity>
                        </View>

                    </View>




                    <View style={styles.box}>
                        {/* Faq Text */}
                        <Text style={styles.top}>
                            FAQs
                     </Text>


                        {/* Faqs Tab */}
                        <Text style={styles.bottom}>
                            A paragraph of text with an unassigned HyperLink.{'\n'}
                            A second row with a web link
                       </Text>
                    </View>


                    {/* Customer Support Tab  */}
                    <View style={{flexDirection: 'row', marginTop: -25}}>
                    <TouchableOpacity onPress={this.clicked} style={styles.order}>

                        <Text style={styles.text}>Customer Support</Text>

                    </TouchableOpacity>

                    {/* LogOut Tab  */}

                    <TouchableOpacity onPress={this.show1} style={styles.order}>

                        <Text style={styles.text}>Logout</Text>

                    </TouchableOpacity>
                    </View>


                </ScrollView>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        width: '100%',
        // backgroundColor:"rgba(80,250,20,0.1)",

    },
    head: {
        width: '100%',
        height: '20%',
        padding: 10,
        fontSize: 200,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "rgba(20,80,90,1)"
    },
    hi: {
        textAlign: "left",
        margin: 10,
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        letterSpacing: 2,
        textTransform: "capitalize"
    },
    image: {
        height: 100,
        width: 100,
        backgroundColor: '#DDDDDD',
        borderRadius: 200,
        marginLeft: 80,
        borderWidth: 10,

    },
    box: {
        width: '100%',
        paddingBottom: 0,
        marginBottom: 0

    },
    top: {
        backgroundColor: "rgba(20,80,90,0.75)",
        margin: 5,
        padding: 10,
        // width:"100%",
        fontWeight: "bold"
    },
    bottom: {
        paddingTop: 0,
        padding: 10,
        paddingBottom: 0,
        height: 100
    },
    side: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 20,
    },
    order: {
        width: "35%",
        height: 35,
        padding: 5,
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 20,
        backgroundColor: "#006666",
        elevation: 5,
        // backgroundColor:"rgba(80,250,200,0.5)",
        borderRadius: 5,


    },
    scroll: {
        width: "100%"
    },
    text: {
        color: "white",
        fontWeight: "bold",
    }
    // {fontSize:22,bottom:325,left:4}
    // customerSuport:{

    //     left:6,
    //     top: 450,
    //     fontSize: 50,
    //     marginRight: 230,
    //     backgroundColor: "#DDDDDD",
    // },
    // hi:{
    //    bottom:350,
    //    fontSize:25,
    //    left:5
    // },
    // Logout:{
    //    left:10,
    //    top:540,
    //    backgroundColor: "#DDDDDD",
    //    marginRight:320,

    // },
    // textbox :{
    //     height: 120,
    //     borderTopWidth: 2,
    //     borderBottomWidth:2,
    //     top: 180,
    //     backgroundColor:'#00bcd4',

    // },
    // faq:{
    //     top:173,
    //     left:6,
    //     fontSize:22,
    // },
    // pending:{
    //     top:181,
    //     left:6,
    //     marginRight:285,
    //     backgroundColor: "#DDDDDD",

    // },
    // ongoing:{
    //     top:157,
    //     left:140,
    //     marginRight:285,
    //     backgroundColor: "#DDDDDD",
    // },
    // past:{
    //     top:134,
    //     left:275,
    //     marginRight:285,
    //     backgroundColor: "#DDDDDD",
    // },
    // order:{
    //     top:25,
    //     left: 114,
    //     fontSize: 25,

    // },
    // upper:{
    //     height: 90,
    //     borderTopWidth: 2,
    //     borderBottomWidth:2,
    //     bottom: 165,
    //     backgroundColor:'#00bcd4',
    // }

})
