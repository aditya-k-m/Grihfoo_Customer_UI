import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
export default class HeaderIconTextButtonExample extends Component {
  
  
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"#ececec"}} >
           <Body>
            <Text style={{left:110,fontSize:22}}>Chef Namritha</Text>
          </Body> 
           <Right>
            
          </Right>
        </Header>
      </Container>
    );
  }
}