import React, {Component} from 'react'
import {Text, View, StatusBar, ScrollView, Image, Dimensions} from 'react-native'
import AppHeader from '../common/AppHeader'
import Strings from '../assets/Strings'; 
import {connect} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {Card, CardItem, Header , Left, Right, Body, Title, Button} from 'native-base'
import { Actions } from 'react-native-router-flux';
import * as color from '../assets/Colors'

const WIDTH = Dimensions.get('screen').width;
class Categories extends Component {
    
    render() {
        return(
            <View style={{flex:1}} >
                <StatusBar hidden/>
                   <AppHeader text={Strings.categories}  Licon='ios-menu' Ricon='shopping-cart' Ltype='Ionicons' Rtype='MaterialIcons' onPressLeft={()=>Actions.drawerOpen()} onPressRight={()=> Actions.finalOrder({items:this.props.add})}/>
               <View style={{flex:9, backgroundColor:'white'}}>
               <ScrollView>
                    <Card  style={{borderColor: color.MAIN_COLOR}}>
                        <CardItem style={{alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                            <Image source={require('../assets/Imgs/Car2.jpg')}   style={{marginTop:hp(3)}} />
                            <Button onPress={()=> Actions.carDetails()}  style={{ justifyContent:'center', alignItems:'center', marginTop:hp(5), width:WIDTH, backgroundColor: color.MAIN_COLOR}}>
                                <Text style={{color:color.TEXT_COLOR, fontSize:wp(6)}}>{Strings.cars}</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card  style={{borderColor: color.MAIN_COLOR}}>
                       <CardItem style={{alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                            <Image source={require('../assets/Imgs/lap.jpg')}  style={{marginTop:hp(3)}}  />
                            <Button onPress={()=> Actions.lapDetails()}  style={{ justifyContent:'center', alignItems:'center', marginTop:hp(10), width:WIDTH, backgroundColor: color.MAIN_COLOR}}>
                                <Text style={{color:color.TEXT_COLOR, fontSize:wp(6)}}>{Strings.laps}</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card  style={{borderColor: color.MAIN_COLOR}}>
                       <CardItem style={{alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                            <Image source={require('../assets/Imgs/mob.jpg')} style={{marginTop:hp(3)}}    />
                            <Button onPress={()=> Actions.mobDetails()}   style={{ justifyContent:'center', alignItems:'center', marginTop:hp(5), width:WIDTH, backgroundColor: color.MAIN_COLOR}}>
                                <Text style={{color:color.TEXT_COLOR, fontSize:wp(6)}}>{Strings.mobiles}</Text>
                            </Button>
                        </CardItem>
                    </Card>
                </ScrollView>
               </View>
            </View>
        )
    }
}


 const mapStateToProps = state => ({
     isRtl: state.lang.Rtl,
     add: state.cart.items
 })
export default connect(mapStateToProps)(Categories)