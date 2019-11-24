import React ,{Component} from 'react'
import {View, Image, StatusBar,Dimensions, ScrollView,YellowBox} from 'react-native'
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

const price = 1850000
const WIDTH = Dimensions.get('screen').width
class BMW19 extends Component {
    constructor() {
        super()
        this.state= {
            isAdded:false
        }
    }
    render() {
        
        YellowBox.ignoreWarnings([
            'Warning: ViewPagerAndroid has been extracted',
            
          ]);
        return(
           <View style={{flex:1}}>
                <StatusBar hidden />
                <AppHeader text={Strings.details} Licon='arrow-back' Ricon= 'shopping-cart' Ltype='MaterialIcons' Rtype='MaterialIcons' onPressLeft={()=>Actions.pop()} onPressRight={()=> Actions.finalOrder({items: this.props.add, itemPrice: price})}/>
                <View style={{ flex: 10, flexDirection: 'column', backgroundColor: 'white' }}>
                    
                    
                        <Swiper autoplay={false} loop={false} showsButtons={false} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: hp(50)}}>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../assets/Imgs/BMW19.jpg')} />
                            </View>

                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../assets/Imgs/BMW19-2.png')} />
                            </View>

                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../assets/Imgs/BMW19-3.png')} />
                            </View>

                            <View style={{alignItems:'center',justifyContent:'center', }}>
                                <Image source={require('../assets/Imgs/BMW19-4.png')} />
                            </View>
                        </Swiper>
                    

                    <View style={{marginTop:hp(3) ,position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', height: hp(48) }}>
                      <ScrollView>
                        <Container>
                            <Content>
                                <List>
                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.engine} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='4400 CC' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.power} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='450' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                         <AppText text={Strings.maxSpeed} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='250' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.acceleration} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='4.8' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.speeds} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='8 Speeds' fontSize={wp(4)} color={color.TEXT_COLOR}/>     
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.transType} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='automatic' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.year} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='2019' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.fuel} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='92' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.liter} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='9.7' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                    <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={Strings.originCountry} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText text='Germany' fontSize={wp(4)} color={color.TEXT_COLOR}/>
                                    </ListItem>

                                </List>
                            </Content>
                        </Container>
                       </ScrollView>  
                    </View>

                    <View style={{flexDirection:'row' ,position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: color.TEXT_COLOR, height: hp(7) }}>
                        <Button onPress={()=>{ 
                               this.props.IncrementCounter(),
                               this.props.AddToCart(Strings.bmw19, price) 
                               
                               
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
export default connect(mapStateToProps, mapDispatchToProps)(BMW19)

