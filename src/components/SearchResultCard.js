import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class SearchResultCard extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://s.wsj.net/public/resources/images/BN-BO194_iwomen_DV_20140217102812.jpg'}} />
                <Body>
                  <Text>Chef Ranjitha</Text>
                  <Text note>5 kms away</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  Paneer Tikka Masala: Rs. 50
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,296 Orders</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}