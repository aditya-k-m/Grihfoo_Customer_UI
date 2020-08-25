import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, BackHandler } from 'react-native';
import Header from '../components/Header';
import FoodSection from '../components/FoodSection';
import { ScrollView } from 'react-native-gesture-handler';
export default class MainPage extends Component {
    render() {
        return (
            <View>
                <Header />
                <Image style={styles.image} source={require('../assets/HARSH.png')} />

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
        height: 50,
        width: 50,
        borderRadius: 200,
        marginLeft: 285,
        marginBottom: 5,
        borderWidth: 10,
        left: 65,
        top: 4
    },
    namratha: {
        fontSize: 20,
        top: 25
    }
})
