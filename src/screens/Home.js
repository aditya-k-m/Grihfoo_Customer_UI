import React,{Component} from 'react';
import {View,Text, ScrollView} from 'react-native';

import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon, colors} from 'react-native-elements';
import Profile from './Profile';
import Cart from './Cart';
import Search from './Search';
import HomeScreenCard from '../components/HomeScreenCard';
import HomeSwiper from '../components/HomeSwiper';
import VectorIcon from 'react-native-vector-icons/Entypo';

class Home extends Component
{
    constructor(props){
        super(props);
        this.state = {
            topPicksMenu: [],
            timeBasedMenu: [],
            topOffersMenu: [],
            chefsNearby: []
        }
    }

    async componentDidMount(){
        try {
            await fetch('http://192.168.43.75:3000/dishes2')
            .then((response) => response.json())
            .then((menus) => {
                this.setState({
                    topPicksMenu: menus,
                    timeBasedMenu: menus,
                    topOffersMenu: menus
                });
            });
        } catch(error){
            console.log("There was an error connecting: "+error);
        }
        console.log(this.state.topPicksMenu);
    }
    

    render()
    {
        return (
            <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
                <VectorIcon style={{paddingHorizontal: 10, paddingBottom: 5}} name='location-pin' size={30} />
                <Text style = {{fontSize: 15, fontWeight: '700', paddingHorizontal: 20, textAlign: 'left'}}>
                    Yelahanka, Bengaluru - 560064
                </Text>
                
                <ScrollView>
                <View style={{height: 160, marginTop: 20}}>
                    <Text style = {{paddingHorizontal:20, paddingBottom:10, fontWeight: '700'}}>Top picks for you</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        { this.state.topPicksMenu.map(item => (<HomeScreenCard imageUri={item.picLink} name={item.name} />) )}
                    </ScrollView>
                </View>

                <View style={{height: 160, marginTop: 20}}>
                    <Text style = {{paddingHorizontal:20, paddingBottom:10, fontWeight: '700'}}>Looking for a light breakfast ?</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <HomeScreenCard imageUri='https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Smitha_Kalluraya/Thatte_Idli.jpg' name="Thatte Idli" />
                        <HomeScreenCard imageUri='https://www.theloveofspice.com/wp-content/uploads/2019/01/kanda-poha-recipe.jpg' name="Pohe" />
                        <HomeScreenCard imageUri='https://assets.bonappetit.com/photos/57aca69153e63daf11a4d915/master/pass/california-veggie-sandwich.jpg' name="Veggie Sandwich" />
                        <HomeScreenCard imageUri='https://recipes.timesofindia.com/thumb/54289752.cms?width=1200&height=1200' name="Masala Dosa" />
                    </ScrollView>
                </View>

                <View style={{height: 160, marginTop: 20}}>
                    <Text style = {{paddingHorizontal:20, paddingBottom:10, fontWeight: '700'}}>Top Offers</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <HomeScreenCard imageUri='https://5.imimg.com/data5/YB/FP/MY-24215181/apple-juice-500x500.jpg' name="Apple Juice" />
                        <HomeScreenCard imageUri='https://recipes.timesofindia.com/thumb/53099699.cms?width=1200&height=1200' name="Jalebi" />
                        <HomeScreenCard imageUri='https://www.myweekendkitchen.in/wp-content/uploads/2011/07/bhature_recipe_Indian_puffed_bread.jpg' name="Chole Bhatoore" />
                        <HomeScreenCard imageUri='https://www.indianhealthyrecipes.com/wp-content/uploads/2012/11/gulab-jamun-recipe-500x375.jpg' name="Gulabjamun" />
                    </ScrollView>
                </View>

                <View style={{marginTop:10}}>
                <Text style = {{paddingHorizontal:20, paddingBottom:10, fontWeight: '700'}}>Best chefs nearby</Text>
                    <HomeSwiper />
                </View>
                </ScrollView>
            </View>
        )
    }
}

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home :{screen:Home,
            navigationOptions:{
                tabBarLabel:'Home',
                activeColor:'#f9f7d9',
                inactiveColor:'#000000',
                barStyle:{backgroundColor:'#67baf6'},
                tabBarIcon:()=> (
                    <View>
                        <Icon name={'home'} size ={25} style ={{color:'#ff0000'}}/>
                    </View>
                )
            }
        },
        Search:{screen:Search,
            navigationOptions:{
                tabBarLabel:'Search',
                activeColor:'#f9f7d9',
                inactiveColor:'#000000',
                barStyle:{backgroundColor:'#67baf6'},
                tabBarIcon:()=> (
                    <View>
                        <Icon name={'search'} size ={25} style ={{color:'#ff0000'}}/>
                    </View>
                )
            }
        },
        
        Cart:{screen:Cart,
            navigationOptions:{
                tabBarLabel:'Cart',
                activeColor:'#f9f7d9',
                inactiveColor:'#000000',
                barStyle:{backgroundColor:'#67baf6'},
                tabBarIcon:()=> (
                    <View>
                        <Icon name={'add-shopping-cart'} size ={25} style ={{color:'#ff0000'}}/>
                    </View>
                )
            }
       
        },
        
        Profile:{screen:Profile,
            navigationOptions:{
                tabBarLabel:'Profile',
                activeColor:'#f9f7d9',
                inactiveColor:'#000000',
                barStyle:{backgroundColor:'#67baf6'},
                tabBarIcon:()=> (
                    <View>
                        <Icon name={'person'} size ={25} style ={{color:'#ff0000'}}/>
                    </View>
                )
            }
       
        },
        
    }
);

export default createAppContainer(TabNavigator);