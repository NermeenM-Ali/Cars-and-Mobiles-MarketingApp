import React ,{Component} from 'react'
import {View, Image, StatusBar,Dimensions, ScrollView, YellowBox, FlatList, Text} from 'react-native'
import Swiper from 'react-native-swiper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {changeLanguage} from '../actions/changeLanguage'
import {IncrementCounter} from '../actions/counterAction'
import {connect} from 'react-redux';
import * as color from '../assets/Colors'
import { Button, Icon, Container, Content, List, ListItem } from 'native-base';
import {EmptyCart} from '../actions/cartAction'
import AppText from '../common/AppText';
import Strings from '../assets/Strings';
import AppHeader from '../common/AppHeader';
import {Actions} from 'react-native-router-flux'
import Swipeout from 'react-native-swipeout'
import {RemoveFromCart} from '../actions/cartAction'


const WIDTH = Dimensions.get('screen').width

class FinalOrder extends Component {
    
    render() {
        YellowBox.ignoreWarnings([
            'Warning: ViewPagerAndroid has been extracted',
            
            
          ]);
        const swipeSetting= {
            autoClose: true,
            right: [
               
                   this.props.isRtl? 
                   {
                        onPress: ()=> {

                        },
                        text:Strings.delete, type:'delete', backgroundColor:color.TEXT_COLOR, color: color.MAIN_COLOR
                   }
                   : 
                   {
                        onPress: ()=> {

                        },
                        text:Strings.delete, type:'delete', backgroundColor:color.TEXT_COLOR, color: color.MAIN_COLOR
                
                   }
               
            ], 
         backgroundColor:'white',
         sectionId:1
            
        }
        return(
           <View style={{flex:1}}>
                <StatusBar hidden />
                <AppHeader text={Strings.cart} Licon='arrow-back' Ltype='MaterialIcons'   onPressLeft={()=>Actions.pop()} />
                <View style={{ flex: 10, flexDirection: 'column', backgroundColor: 'white' }}>
    
                        <FlatList
                                    data={this.props.items}
                                    renderItem={({item})=> 
                                    
                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={item} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <Button transparent onPress={()=> this.props.RemoveFromCart(item)}>
                                             <Icon  name='trash' type='Entypo' style={{color:color.TEXT_COLOR,fontSize:wp(6)}}/>
                                        </Button>
                                    </ListItem>
                                    
                                    }
                                   // keyExtractor={(item, index)=> item}
                        />
                                       

                      <View style={{flexDirection:'row' ,position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: color.TEXT_COLOR, height: hp(7) }}>
                        <Button onPress={()=>{ 
                              this.props.EmptyCart()
                        
                             }}
                         style={{ flexDirection: this.props.isRtl ? 'row-reverse' : 'row', backgroundColor: color.MAIN_COLOR, width: WIDTH / 2, height: hp(7), alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name='trash' type='Entypo' style={{ fontSize: wp(6), color: color.TEXT_COLOR }} />
                            <AppText text={Strings.empty} fontSize={wp(4)} color={color.TEXT_COLOR} />
                        </Button>
                        
                        <AppText  text={`${Strings.total}: ${this.props.total} ${Strings.EGP}`} fontSize={wp(5)} color={color.MAIN_COLOR} marginLeft={wp(5)} marginVertical={hp(1)}/>
                    </View>
                </View>
           </View>
        )
    }
}


const mapDispatchToProps = {
    changeLanguage,
    IncrementCounter,
    EmptyCart,
    RemoveFromCart
 }
 const mapStateToProps = state => ({
     isRtl: state.lang.Rtl,
     add: state.cart.items,
     total: state.cart.total
 })
export default connect(mapStateToProps, mapDispatchToProps)(FinalOrder)


