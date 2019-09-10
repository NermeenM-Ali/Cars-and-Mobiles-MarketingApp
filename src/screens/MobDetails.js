import React, { Component } from 'react';
import {View} from 'react-native'
import { Container, Icon, Content, List, ListItem, Text, Left, Right } from 'native-base';
import AppHeader from '../common/AppHeader';
import Strings from '../assets/Strings';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../assets/Colors'
import AppText from '../common/AppText'

class LapDetails extends Component {
  render() {
    return (
     <View style={{flex:1}}> 
                <AppHeader text={Strings.mobiles} Licon='arrow-back' Ltype='MaterialIcons' onPressLeft={()=> Actions.pop()}/>
            <Container style={{flex:9}}>
                <Content >
                    <List >
                        <ListItem itemDivider  style={{flexDirection: this.props.isRtl? 'row-reverse' : 'row'}} >
                            <AppText text={Strings.iphone} color={color.TEXT_COLOR} fontSize={wp(5)}/>
                        </ListItem>
                        
                        {
                             
                           this.props.isRtl ?
                            <ListItem onPress={()=> Actions.iphoneXs()}>    
                             <Left>        
                               <Icon type='Ionicons' onPress={()=> Actions.iphoneXs()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                            </Left>
                            <Right>
                               <AppText text={Strings.iphoneXs} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                            </Right>
                            </ListItem>
                                :
                                <ListItem onPress={()=> Actions.iphoneXs()}>    
                                <Left> 
                                   <AppText text={Strings.iphoneXs} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                                 
                               </Left>
                               <Right>
                                  <Icon type='Ionicons' onPress={()=> Actions.iphoneXs()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
                               </Right>
                               </ListItem>
                            

                           
                            }


                            {
                             
                             this.props.isRtl ?
                              <ListItem onPress={()=> Actions.iphoneX()}>    
                               <Left>        
                                 <Icon type='Ionicons'  onPress={()=> Actions.iphoneX()}  style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                              </Left>
                              <Right>
                                 <AppText text={Strings.iPhoneX} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                              </Right>
                              </ListItem>
                                  :
                                  <ListItem onPress={()=> Actions.iphoneX()}>    
                                  <Left> 
                                     <AppText text={Strings.iPhoneX} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                                   
                                 </Left>
                                 <Right>
                                    <Icon type='Ionicons' onPress={()=> Actions.iphoneX()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
                                 </Right>
                                 </ListItem>
                              
  
                             
                              }


                        <ListItem itemDivider style={{flexDirection: this.props.isRtl? 'row-reverse' : 'row'}} >
                            <AppText text={Strings.oppo} color={color.TEXT_COLOR} fontSize={wp(5)}/>
                        </ListItem>
                        { 
                            this.props.isRtl ?
                            <ListItem onPress={()=> Actions.oppof11()} >
                            <Left>
                              <Icon type='Ionicons' onPress={()=> Actions.oppof11()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                            </Left>
                            <Right>
                                <AppText text={Strings.oppof11} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                            </Right>
                            </ListItem>
                        :
                        <ListItem onPress={()=> Actions.oppof11()}>    
                        <Left> 
                           <AppText text={Strings.oppof11} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                         
                       </Left>
                       <Right>
                          <Icon type='Ionicons' onPress={()=> Actions.oppof11()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
                       </Right>
                       </ListItem>
                        
                        }
                        {
                             
                           this.props.isRtl ?
                            <ListItem onPress={()=> Actions.oppof9()}>    
                             <Left>        
                               <Icon type='Ionicons'  onPress={()=> Actions.oppof9()}  style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                            </Left>
                            <Right>
                               <AppText text={Strings.oppof9} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                            </Right>
                            </ListItem>
                                :
                                <ListItem onPress={()=> Actions.oppof9()}>    
                                <Left> 
                                   <AppText text={Strings.oppof9} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                                 
                               </Left>
                               <Right>
                                  <Icon type='Ionicons' onPress={()=> Actions.oppof9()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
                               </Right>
                               </ListItem>
                            

                           
                            }

                            
  





                    </List>
                </Content>
            </Container>
      </View> 
    );
  }
}

const mapStateToProps = state=>({
    isRtl: state.lang.Rtl
})

export default connect(mapStateToProps)(LapDetails)