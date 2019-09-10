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

class CarDetails extends Component {
  render() {
    return (
     <View style={{flex:1}}> 
                <AppHeader text={Strings.cars} Licon='arrow-back' Ltype='MaterialIcons' onPressLeft={()=> Actions.pop()}/>
            <Container style={{flex:9}}>
                <Content >
                    <List >
                        <ListItem itemDivider  style={{flexDirection: this.props.isRtl? 'row-reverse' : 'row'}} >
                            <AppText text={Strings.mercedes} color={color.TEXT_COLOR} fontSize={wp(5)}/>
                        </ListItem>
                        { 
                            this.props.isRtl ?
                            <ListItem onPress={()=> Actions.mb19()}>
                            <Left>
                              <Icon type='Ionicons' onPress={()=> Actions.mb19()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                            </Left>
                            <Right>
                                <AppText text={Strings.merceds19} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                            </Right>
                            </ListItem>
                        :
                        <ListItem onPress={()=> Actions.mb19()}>    
                        <Left> 
                           <AppText text={Strings.merceds19} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                         
                       </Left>
                       <Right>
                          <Icon type='Ionicons' onPress={()=> Actions.mb19()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
                       </Right>
                       </ListItem>
                        
                        }
                        {
                             
                           this.props.isRtl ?
                            <ListItem onPress={()=> Actions.mb18()}>    
                             <Left>        
                               <Icon type='Ionicons' onPress={()=> Actions.mb18()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                            </Left>
                            <Right>
                               <AppText text={Strings.merceds18} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                            </Right>
                            </ListItem>
                                :
                                <ListItem onPress={()=> Actions.mb18()}>    
                                <Left> 
                                   <AppText text={Strings.merceds18} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                                 
                               </Left>
                               <Right>
                                  <Icon type='Ionicons'  onPress={()=> Actions.mb18()}  style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
                               </Right>
                               </ListItem>
                            

                           
                            }


                        <ListItem itemDivider style={{flexDirection: this.props.isRtl? 'row-reverse' : 'row'}} >
                            <AppText text={Strings.bmw} color={color.TEXT_COLOR} fontSize={wp(5)}/>
                        </ListItem>
                        { 
                            this.props.isRtl ?
                            <ListItem onPress={()=> Actions.bmw19()}>
                            <Left>
                              <Icon type='Ionicons'  onPress={()=> Actions.bmw19()}  style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                            </Left>
                            <Right>
                                <AppText text={Strings.bmw19} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                            </Right>
                            </ListItem>
                        :
                        <ListItem onPress={()=> Actions.bmw19()}>    
                        <Left> 
                           <AppText text={Strings.bmw19} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                         
                       </Left>
                       <Right>
                          <Icon type='Ionicons' onPress={()=> Actions.bmw19()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
                       </Right>
                       </ListItem>
                        
                        }
                        {
                             
                           this.props.isRtl ?
                            <ListItem onPress={()=> Actions.bmw18()}>    
                             <Left>        
                               <Icon type='Ionicons' onPress={()=> Actions.bmw18()}   style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-back" />
                            </Left>
                            <Right>
                               <AppText text={Strings.bmw18} color={color.MAIN_COLOR} fontSize={wp(4)}/>
                            </Right>
                            </ListItem>
                                :
                                <ListItem onPress={()=> Actions.bmw18()}>    
                                <Left> 
                                   <AppText text={Strings.bmw18} color={color.MAIN_COLOR} fontSize={wp(4)}/>         
                                 
                               </Left>
                               <Right>
                                  <Icon type='Ionicons'  onPress={()=> Actions.bmw18()}  style={{fontSize:wp(4), color:color.MAIN_COLOR}}   name="ios-arrow-forward" />
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

export default connect(mapStateToProps)(CarDetails)