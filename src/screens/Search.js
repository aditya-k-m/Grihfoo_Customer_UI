import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import SearchResultCard from '../components/SearchResultCard';
import VectorIcon from 'react-native-vector-icons/AntDesign';


export default class SearchBarExample extends Component {

  //setting up the states
  constructor(props){
      super(props);
      this.state = {
          searchText: "" //search text state
      }
  }

  //to update the search Text state
  changeSearchText(value){
      this.setState({
          searchText: value
      });
      console.log(this.state.searchText);
  }

  render() {
    return (
      <Container>
          <Item>
            <VectorIcon style={{paddingHorizontal: 10}} name="search1" />
            <Input placeholder="Search" onChangeText={ (value) => this.changeSearchText(value) }/>
          </Item>
        <SearchResultCard />
      </Container>
      
    );
  }
}