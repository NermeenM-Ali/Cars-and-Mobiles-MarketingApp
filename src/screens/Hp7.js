import React ,{Component} from 'react'
import {View, Image, StatusBar,Dimensions, ScrollView, YellowBox} from 'react-native'
import Swiper from 'react-native-swiper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {changeLanguage} from '../actions/changeLanguage'
import {IncrementCounter} from '../actions/counterAction'
import {AddToCart} from '../actions/cartAction'
import {connect} from 'react-redux';
import * as color from '../assets/Colors'
import { Button, Icon, Container, Content, List, ListItem } from 'native-base';
import AppText from '../common/AppText';
import Strings from '../assets/Strings';
import AppHeader from '../common/AppHeader';
import {Actions} from 'react-native-router-flux'

const price= 18499
const WIDTH = Dimensions.get('screen').width
class Hp7 extends Component {
    render() {
        
        YellowBox.ignoreWarnings([
            'Warning: ViewPagerAndroid has been extracted',
            
          ]);
        return(
           <View style={{flex:1}}>
                <StatusBar hidden />
                <AppHeader text={Strings.details} Licon='arrow-back' Ricon= 'shopping-cart' Ltype='MaterialIcons' Rtype='MaterialIcons' onPressLeft={()=>Actions.pop()} onPressRight={()=>Actions.finalOrder({items: this.props.add, itemPrice: price})}/>
                <View style={{ flex: 10, flexDirection: 'column', backgroundColor: 'white' }}>
                    
                <Swiper autoplay={false} loop={false} showsButtons={false} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: hp(50)}}>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../assets/Imgs/hp7.jpg')} style={{marginTop:hp(10),width:wp(70), height:hp(30)}} />
                            </View>

                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../assets/Imgs/hp7-2.jpg')} style={{marginTop:hp(10),width:wp(70), height:hp(30)}} />
                            </View>
                            
                        </Swiper>

                    <View style={{marginTop:hp(3) ,position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', height: hp(48) }}>
                      <ScrollView>
                        <Container>
                            <Content>
                                <List>
                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.productName} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='HP Pavilion  ' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.processor} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='Intel® Core™i7' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                         <AppText text={Strings.processorGeneration} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text=' 8th Generation' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.ram} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='8 GB DDR4-2400' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.HardDrive} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='1 TB' fontSize={wp(4)} color={color.TEXT_COLOR}/>     
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.operatingSystem} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='Windows 10' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.dimensions} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text=' 0.93"x14.96"x10.25"' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.colors} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='Natural Silver' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>


                                </List>
                            </Content>
                        </Container>
                       </ScrollView>  
                    </View>

                    <View style={{flexDirection:'row' ,position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: color.TEXT_COLOR, height: hp(7) }}>
                        <Button  onPress={()=>{ 
                               this.props.IncrementCounter(),
                               this.props.AddToCart(Strings.hp7, price) 
                             
                               
                             }} style={{ flexDirection: this.props.isRtl ? 'row-reverse' : 'row', backgroundColor: color.MAIN_COLOR, width: WIDTH / 2, height: hp(7), alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name='add-shopping-cart' type='MaterialIcons' style={{ fontSize: wp(6), color: color.TEXT_COLOR }} />
                            <AppText text={Strings.addToCart} fontSize={wp(4)} color={color.TEXT_COLOR} />
                        </Button>
                        <AppText text={`${Strings.EGP} ${price}`} fontSize={wp(5)} color={color.MAIN_COLOR} marginLeft={wp(5)} marginVertical={hp(1)}/>
                    </View>
                </View>
           </View>
        )
    }
}


const mapDispatchToProps = {
    changeLanguage,
    IncrementCounter,
    AddToCart
 }
 const mapStateToProps = state => ({
     isRtl: state.lang.Rtl,
     add: state.cart.items
 })
export default connect(mapStateToProps, mapDispatchToProps)(Hp7)

