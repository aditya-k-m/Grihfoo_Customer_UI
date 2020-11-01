import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Ranjitha Bhaskar',
    name: 'Must try: Panner Butter Masala',
    chefImage: {uri: 'https://s.wsj.net/public/resources/images/BN-BO194_iwomen_DV_20140217102812.jpg'},
    specialityImage: {uri: 'https://farm5.staticflickr.com/4244/34375209303_fe133a2921_o_d.png'},
    deliveryTime: 'Delivered in 12 mins'
  },
  {
      text: 'Snehlata Sharma',
      name: 'Must try: Bhindi Masala',
      chefImage: {uri: 'https://thebetterindia-english.s3.amazonaws.com/uploads/2019/09/Divya.jpeg'},
      specialityImage: {uri: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/vidzworld-gmail.com/Bhindi_Masala_Recipe_-_Ladies_Finger_In_Tomato_Onion_Gravy_-4.jpg'},
      deliveryTime: 'Delivered in 18 mins'
  }
];
export default class HomeSwiper extends Component {
  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.chefImage} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>{item.deliveryTime}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.specialityImage} />
                </CardItem>
                <CardItem>
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}