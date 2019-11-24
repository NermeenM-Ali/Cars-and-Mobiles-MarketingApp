import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {Container, Content, Left, Right, Thumbnail, Body,List, ListItem,Icon} from 'native-base'
//import {createDrawerNavigator, createAppContainer} from 'react-navigation'
import Categories from '../screens/Categories'
import AboutUs from '../screens/AboutUs'
import { Actions } from 'react-native-router-flux';
import Strings from '../assets/Strings';
import {changeLanguage} from '../actions/changeLanguage'
import {connect} from 'react-redux';
import * as color from '../assets/Colors'
//import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppText from '../common/AppText'

class DrawerMenu extends Component {
    render() {
        return(
            <View style={{flex:1, backgroundColor:color.MAIN_COLOR}}>
                <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:color.MAIN_COLOR}}>

                    <Thumbnail large 
                               source={require('../assets/Imgs/drawer.jpg')} 
                               style={{width:wp(30), height:wp(30), borderRadius:wp(25)}}
                    />
                    <AppText  text= {Strings.name} style={{fontSize:wp(3), fontWeight:'bold',  marginTop: hp(3)}} color={color.TEXT_COLOR}/>
                    <AppText text= {Strings.profile} style={{fontSize:wp(2.5), fontWeight:'bold',  marginTop: hp(1)}} color={color.TEXT_COLOR}/>
                </View>

                <View style={{flex:2  }}>
                    <Content  >
                        <List >
                            <ListItem  style={{flexDirection: this.props.isRtl? 'row-reverse' : 'row'}}>
                                <Icon name='star' type='AntDesign' style={{fontSize:wp(6), color:color.TEXT_COLOR}} />
                                <AppText text= {Strings.categories} color={color.TEXT_COLOR}  marginHorizontal= {wp(2)} onPress={()=> Actions.categories()}/>
                            </ListItem>

                            <ListItem   style={{flexDirection: this.props.isRtl? 'row-reverse' : 'row'}}>
                                <Icon name='book' type='FontAwesome' style={{fontSize:wp(6), color:color.TEXT_COLOR}}/>
                                <AppText text= {Strings.about} color={color.TEXT_COLOR}  marginHorizontal= {wp(2)} onPress={()=> Actions.aboutUs()}/>
                            </ListItem>

                            <ListItem   style={{flexDirection: this.props.isRtl? 'row-reverse' : 'row'}}>
                                <Icon name='perm-phone-msg' type='MaterialIcons' style={{fontSize:wp(6), color:color.TEXT_COLOR}} />
                                <AppText text= {Strings.contactUs} color={color.TEXT_COLOR}  marginHorizontal= {wp(2)} onPress={()=> Actions.contactUs()}/>
                            </ListItem>

                            <ListItem   style={{flexDirection: this.props.isRtl? 'row-reverse' : 'row'}}>
                                <Icon name='log-out' type='Entypo' style={{fontSize:wp(6), color:color.TEXT_COLOR}} />
                                <AppText text= {Strings.logOut} color={color.TEXT_COLOR}  marginHorizontal= {wp(2)} onPress={()=> Actions.splash()}/>
                            </ListItem>

                            
                        </List>
                    </Content>
                </View>       
            </View>
        )
    }
}

const mapDispatchToProps = {
    changeLanguage
 }
 const mapStateToProps = state => ({
     isRtl: state.lang.Rtl
 })
export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu)



























