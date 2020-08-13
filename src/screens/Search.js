import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import SearchResultCard from '../components/SearchResultCard';
export default class SearchBarExample extends Component {

  constructor(props){
      super(props);
      this.state = {
          searchText: ""
      }
  }

  changeSearchText(value){
      this.setState({
          searchText: value
      });
      console.log(this.state.searchText);
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={ (value) => this.changeSearchText(value) }/>
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <SearchResultCard />
      </Container>
      
    );
  }
}