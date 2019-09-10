import React, {Component} from 'react'
import {Text, View, Image, StatusBar} from 'react-native'
import {Card, Icon, CardItem, Container, Left, Right,Body} from 'native-base'
import {connect} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppText from '../common/AppText'
import AppHeader from '../common/AppHeader'
import Strings from '../assets/Strings';
import { Actions } from 'react-native-router-flux';
import * as color from '../assets/Colors'


class ContactUs extends Component {
    render() {
        return(
           <View style={{flex:1}}>
               <StatusBar hidden/>
               <AppHeader text={Strings.contactUs} Licon='ios-menu' onPressLeft={()=> Actions.drawerOpen()}/>
                <Container style={{flex:8}}>
                
                <Card style={{borderColor: color.MAIN_COLOR, height:hp(30), marginTop:wp(10), borderRadius:wp(10),borderWidth:wp(0.5)}}>
                    <View style={{flexDirection:'row' , marginTop:wp(5),flexDirection:this.props.isRtl? 'row-reverse' :'row'}}>
                        <Icon name='ios-compass' style={{color:color.MAIN_COLOR,fontSize:wp(8) , marginRight:wp(2), marginLeft:wp(2)}}/>
                        <AppText text=' : ' fontSize={wp(5)} marginLeft={wp(2)} color={color.MAIN_COLOR}/>  
                        <AppText text='Suez-Egypt ' fontSize={wp(4)} color={color.MAIN_COLOR}/>
                    </View>

                    <View style={{flexDirection:'row' , marginTop:wp(5),flexDirection:this.props.isRtl? 'row-reverse' :'row'}}>
                        <Icon name='ios-contact' style={{color:color.MAIN_COLOR,fontSize:wp(8) ,marginRight:wp(2), marginLeft:wp(2)}}/>
                        <AppText text=' : ' fontSize={wp(5)} color={color.MAIN_COLOR}/>  
                        <AppText text=' 010549872 ' fontSize={wp(4)} color={color.MAIN_COLOR}/>
                    </View>

                    <View style={{flexDirection:'row' , marginTop:wp(5),flexDirection:this.props.isRtl? 'row-reverse' :'row'}}>
                        <Icon name='ios-mail' style={{color:color.MAIN_COLOR,fontSize:wp(8) ,marginRight:wp(2), marginLeft:wp(2)}}/>
                        <AppText text=' : ' fontSize={wp(5)} color={color.MAIN_COLOR}/>  
                        <AppText text='mohamednermeen110@gmail.com' fontSize={wp(4)} color={color.MAIN_COLOR}/>
                    </View>
                    
                </Card>
                
            </Container>
           </View>
        )
    }
}

const mapStateToProps = state=>({
    isRtl: state.lang.Rtl
})

export default connect(mapStateToProps)(ContactUs)