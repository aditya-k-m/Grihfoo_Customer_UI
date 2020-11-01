import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, BackHandler, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import FoodSection from '../components/FoodSection';
import { ScrollView } from 'react-native-gesture-handler';
import VectorIcon from 'react-native-vector-icons/AntDesign';
export default class MainPage extends Component {
    backClicked() {
        this.props.navigation.goBack();
    }
    render() {
        return (
            <View>
                <View style={{ marginHorizontal: 20, paddingVertical: 20, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.backClicked()} style={{flex: 1}}>
                        <VectorIcon name='arrowleft' size={34} style={{ paddingTop: 7 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 34, fontWeight: 'bold', paddingLeft: 20, flex: 5 }}>Chef Namritha</Text>
                    <Image style={styles.image} source={require('../assets/HARSH.png')} />
                </View>
                

                {/* Text on homemaker rating and Speciality */}

                <Text style={styles.namratha}>
                    Ratings: ****{'\n'}
                        Speciality: Chole Kulche
                </Text>

                {/* Section being used as custom component */}
                <FoodSection
                    name='Chole Bhature'
                    rating='****'
                    by='12.00 pm'
                    imageUri='https://www.pngitem.com/pimgs/m/246-2460287_chole-bhature-image-png-transparent-png.png'
                />
                <FoodSection
                    name='Paneer Butter Masala'
                    rating='****'
                    by='12.00 pm'
                    imageUri='https://www.cookwithmanali.com/wp-content/uploads/2014/04/Paneer-Tikka-Masala-4-notitle-cwm.jpg'
                />
                <FoodSection
                    name='Masala Papad'
                    rating='****'
                    by='12.00 pm'
                    imageUri='https://5.imimg.com/data5/OS/JT/GLADMIN-17925124/masala-papad-salad-250x250.png'
                />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        height: 60,
        width: 60,
        borderRadius: 200,
        marginBottom: 5,
        marginLeft: 15,
        borderWidth: 10,
        flex: 1
    },
    namratha: {
        fontSize: 20,
        top: 25
    }
})
