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
                <AppHeader text={Strings.laps} Licon='arrow-back' Ltype='MaterialIcons' onPressLeft={()=> Actions.pop()}/>
            <Container style={{flex:9}}>
                <Content >
                    <List >
                        <ListItem itemDivider  style={{flexDirection: this.props.isRtl? 'row-reverse' : 'row'}} >
                            <AppText text={Strings.dell} color={color.TEXT_COLOR} fontSize={wp(5)}/>
                        </ListItem>
                        { 
                            this.props.isRtl ?
                            <ListItem onPress={()=> Actions.dell7()}>
                            <Left>
                              <Icon type='Ionicons' onPress={()=> Actions.dell7()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                            </Left>
                            <Right>
                                <AppText text={Strings.dell7} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                            </Right>
                            </ListItem>
                        :
                        <ListItem onPress={()=> Actions.dell7()}>    
                        <Left> 
                           <AppText text={Strings.dell7} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                         
                       </Left>
                       <Right>
                          <Icon type='Ionicons'  onPress={()=> Actions.dell7()}  style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
                       </Right>
                       </ListItem>
                        
                        }
                        {
                             
                           this.props.isRtl ?
                            <ListItem onPress={()=> Actions.dell5()}>     
                             <Left>        
                               <Icon type='Ionicons'  onPress={()=> Actions.dell5()}  style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                            </Left>
                            <Right>
                               <AppText text={Strings.dell5} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                            </Right>
                            </ListItem>
                                :
                                <ListItem onPress={()=> Actions.dell5()}>    
                                <Left> 
                                   <AppText text={Strings.dell5} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                                 
                               </Left>
                               <Right>
                                  <Icon type='Ionicons'  onPress={()=> Actions.dell5()}  style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
                               </Right>
                               </ListItem>
                            

                           
                            }


                            {
                             
                             this.props.isRtl ?
                              <ListItem onPress={()=> Actions.dell3()}>    
                               <Left>        
                                 <Icon type='Ionicons' onPress={()=> Actions.dell3()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                              </Left>
                              <Right>
                                 <AppText text={Strings.dell3} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                              </Right>
                              </ListItem>
                                  :
                                  <ListItem onPress={()=> Actions.dell3()}>    
                                  <Left> 
                                     <AppText text={Strings.dell3} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                                   
                                 </Left>
                                 <Right>
                                    <Icon type='Ionicons' onPress={()=> Actions.dell3()}    style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
                                 </Right>
                                 </ListItem>
                              
  
                             
                              }


                        <ListItem itemDivider style={{flexDirection: this.props.isRtl? 'row-reverse' : 'row'}} >
                            <AppText text={Strings.hp} color={color.TEXT_COLOR} fontSize={wp(5)}/>
                        </ListItem>
                        { 
                            this.props.isRtl ?
                            <ListItem onPress={()=> Actions.hp7()}>
                            <Left>
                              <Icon type='Ionicons'  onPress={()=> Actions.hp7()}  style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                            </Left>
                            <Right>
                                <AppText text={Strings.hp7} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                            </Right>
                            </ListItem>
                        :
                        <ListItem onPress={()=> Actions.hp7()}>    
                        <Left> 
                           <AppText text={Strings.hp7} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                         
                       </Left>
                       <Right>
                          <Icon type='Ionicons' onPress={()=> Actions.hp7()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
                       </Right>
                       </ListItem>
                        
                        }
                        {
                             
                           this.props.isRtl ?
                            <ListItem onPress={()=> Actions.hp5()}>    
                             <Left>        
                               <Icon type='Ionicons' onPress={()=> Actions.hp5()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                            </Left>
                            <Right>
                               <AppText text={Strings.hp5} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                            </Right>
                            </ListItem>
                                :
                                <ListItem onPress={()=> Actions.hp5()}>    
                                <Left> 
                                   <AppText text={Strings.hp5} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                                 
                               </Left>
                               <Right>
                                  <Icon type='Ionicons'  onPress={()=> Actions.hp5()}  style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
                               </Right>
                               </ListItem>
                            

                           
                            }

                            {
                             
                             this.props.isRtl ?
                              <ListItem onPress={()=> Actions.hp3()}>    
                               <Left>        
                                 <Icon type='Ionicons' onPress={()=> Actions.hp3()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                              </Left>
                              <Right>
                                 <AppText text={Strings.hp3} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                              </Right>
                              </ListItem>
                                  :
                                  <ListItem onPress={()=> Actions.hp3()}>    
                                  <Left> 
                                     <AppText text={Strings.hp3} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                                   
                                 </Left>
                                 <Right>
                                    <Icon type='Ionicons' onPress={()=> Actions.hp3()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
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