import React,{Component} from 'react';
import {View,Text} from 'react-native';

import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon, colors} from 'react-native-elements';
import Profile from './Profile';
import Cart from './Cart';
import Search from './Search';

class Home extends Component
{
    render()
    {
        return (
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                <Text style = {{fontSize:40}}>HomeScreen</Text>
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