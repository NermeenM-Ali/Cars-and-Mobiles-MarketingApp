import React, {Component} from 'react'
import {View, StyleSheet,Text} from 'react-native'
import {Left, Right ,Button, Body, Header, Container, Icon, Badge} from 'native-base'
import { heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppText from './AppText'
import {connect} from 'react-redux';
import {IncrementCounter, DecrementCounter} from '../actions/counterAction'
import * as color from '../assets/Colors'



class AppHeader extends Component {
    
    render() {
        const {text, Licon, Ricon, Micon,Ltype, Rtype,Mtype ,onPressLeft, onPressRight, onPressMid} = this.props
        return(
            <View style={{flex:1}}>
                <Container >
                    <Header style={{height: hp(8), backgroundColor:color.MAIN_COLOR}} >
                        <Left>
                            
                                {
                                  Licon === 'shopping-cart'? 
                                  <Button transparent onPress={onPressLeft} >
                                    <Icon name={Licon} type={Ltype} style={{ fontSize: wp(6), color: color.TEXT_COLOR}} />
                                    
                                    <Badge style={{backgroundColor:color.TEXT_COLOR}}>
                                        <Text style={{color:color.MAIN_COLOR}}>{this.props.countNum}</Text>
                                    </Badge>
                                  </Button>
                                  : 
                                  <Button transparent onPress={onPressLeft} >
                                      <Icon name={Licon} type={Ltype} style={{ fontSize: wp(6), color: color.TEXT_COLOR }} />
                                  </Button>
                                }
                            
                        </Left>
                        <Body style={{justifyContent:'center',alignItems:'center',marginLeft:wp(17)}}>
                            <AppText text={text} color={color.TEXT_COLOR} fontSize={wp(4)} marginTop={hp(5)}/>
                            
                        </Body>
                        <Right>
                        {
                           Ricon === 'shopping-cart'?
                                  <View style={{flexDirection:'row'}}> 
                                        <Button transparent onPress={onPressMid}>
                                            <Icon name={Micon} type={Mtype} style={{ fontSize: wp(6), marginRight: wp(3), color: color.TEXT_COLOR }} />
                                        </Button>
                                        <Button transparent onPress={onPressRight}  >
                                            <Icon name={Ricon} type={Rtype} style={{ fontSize: wp(6), color: color.TEXT_COLOR, }} />
                                            <Badge style={{ backgroundColor: color.TEXT_COLOR }}>
                                                <Text style={{ color: color.MAIN_COLOR }}>{this.props.countNum}</Text>
                                            </Badge>
                                        </Button>
                                  </View>
                                  : 
                                  <Button transparent onPress={onPressRight} >
                                      <Icon name={Ricon} type={Rtype} style={{ fontSize: wp(6), color: color.TEXT_COLOR }} />
                                  </Button>
                                }
                        </Right>
                    </Header>
                </Container>
            </View>
        )
    }
}

const mapDispatchToProps = {
    IncrementCounter,
    DecrementCounter
 }
 const mapStateToProps = state => ({
    countNum: state.count.counter
 })
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)

