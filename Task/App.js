import React, {Component} from 'react'
import {Text, View, Dimensions , YellowBox, ScrollView, Image, StatusBar} from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Button, Icon ,Accordion } from 'native-base'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




export default class App extends Component {
    constructor() {
        super()
        this.state={
            readData:''
        }
    }
    render() {
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
            'Warning: componentWillUpdate is deprecated',
          ]);
         // const screenHeight = Dimensions.get('window').height
        return(
        
        <View style={{flex:1}}>
        <StatusBar hidden />
            <Container >
             <Content>
             <ScrollView style={{flex:1}}>    
                 
                 <Card style={{backgroundColor:'white', borderRadius:wp(6)}}>
                        <CardItem style={{backgroundColor:"#2471A3", height:hp(70), borderRadius:wp(6)}}>
                            <Body>
                                <View style={{height:hp(50)}}>
                                    <Icon name='arrow-left' type='FontAwesome' style={{color:'white', fontSize:wp(4), marginTop:hp(3)}} />
                                    <Text style={{marginTop:hp(2), color:'white', opacity:0.6, marginLeft:wp(12)}}>
                                        COURSE OVERVIEW
                                    </Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('./chip2.png')} style={{width:wp(13), height:hp(17), marginLeft:wp(-3)}}/>
                                        <Text style={{marginTop:hp(2), color:'white',marginRight:wp(5), marginLeft:wp(2),fontWeight:'bold',fontSize:wp(4),width:wp(80), flexWrap:'wrap'}}>
                                            Computational Thinking & Coding Course
                                        </Text>
                                    </View>
                                    <Text style={{ color:'white', fontSize:wp(4),marginLeft:wp(12), marginTop:hp(-6), width:wp(80), flexWrap:'wrap'}}>
                                        This Course is designed to help you to develop and reflect upon the
                                        use of Computational Thinking and coding in your classroom.
                                        We will follow a process of learn - Apply - Share in order
                                        to support you to make appropriate changes to your practice.

                                    </Text>
                                </View>
                               <View >
                                    <Button transparent onPress={()=>{
                                        this.setState({
                                            readData:'In Learn we will explore a range of teaching Strategies...'
                                        })
                                    }}>
                                         <Icon name='ios-arrow-down' type='Ionicons' style={{color:'white', fontSize:wp(6),marginLeft:wp(48)}}/>
                                    </Button>
                                    <Text style={{color:'white', fontSize:wp(4),marginLeft:wp(13),marginRight:wp(15), width:wp(80)}}>{this.state.readData!==''? this.state.readData : 'READ MORE'}</Text>
                               </View>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card style={{backgroundColor:'white', borderRadius:wp(6)}}>
                        <CardItem style={{backgroundColor:"white", height:hp(15), borderRadius:wp(6)}}>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('./progress.png')} style={{width:wp(60), height:hp(2), borderRadius:wp(2), marginTop:hp(3)}}/>
                                <Image source={require('./cup.png')} style={{width:wp(5.5), height:hp(3), marginTop:hp(2)}}/>
                                </View>  

                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:'black', fontSize:wp(2.5), marginTop:hp(4), flexWrap:'wrap', width:wp(50)}}>
                                        You have Completed 3 out of 10
                                        modules
                                    </Text>
                                    <Button rounded style={{width:wp(25), height:hp(4), backgroundColor:'#FFB74D', marginTop:hp(3), marginLeft:wp(13)}}>
                                        <Text style={{color:'white', fontSize:wp(3), marginLeft:wp(5)}}>RESUME</Text>
                                    </Button>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
               

                    <Card style={{backgroundColor:'white', borderRadius:wp(2)}}>
                        <CardItem style={{backgroundColor:"#B2BABB", height:hp(15), borderRadius:wp(2)}}>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                   <Icon name='alarm' type='MaterialIcons' style={{color:'white', fontSize:wp(15), marginTop:hp(2)}}/>
                                   <Text style={{color:'white', fontSize:wp(4), width:wp(30), flexWrap:'wrap', marginLeft:wp(10), fontWeight:'400', marginTop:hp(2)}}>COURSE DURATION</Text>
                                    <View style={{flexDirection:'column'}}>
                                    <Text  style={{color:'white', fontSize:wp(4), width:wp(30), flexWrap:'wrap', marginLeft:wp(10), fontWeight:'400', marginTop:hp(2)}}>10 WEEKS</Text>
                                    <Text  style={{color:'white', fontSize:wp(2.5), width:wp(25), flexWrap:'wrap', marginLeft:wp(10), fontWeight:'400'}}>Average per week 2~3 hr/week</Text>    
                                    </View>    
                                </View>
                            </Body>
                        </CardItem>
                    </Card>

                    <Text style={{color:'black', fontSize:wp(5), marginTop:hp(3), marginBottom:hp(2),marginLeft:wp(3)}}>COURSE MODULES</Text>
            
                    <Card style={{backgroundColor:'white', borderRadius:wp(6)}}>
                         <CardItem style={{backgroundColor:"white", height:hp(15), borderRadius:wp(6)}}>
                            <Body>
                               <View style={{flexDirection:'row'}}>
                                 <View style={{flexDirection:'column'}}>
                                    <Button rounded style={{width:wp(30), height:hp(4), backgroundColor:'#117A65', marginTop:hp(1.5), marginBottom:hp(1)}}>
                                        <Icon name='unlock-alt' type='FontAwesome' style={{color:'white', fontSize:wp(3)}}/>
                                        <Text style={{color:'white', fontSize:wp(3),}}>MODULE 1</Text>
                                    </Button>

                                    <Text style={{color:'black', fontSize:wp(3.5), width:wp(60), flexWrap:'wrap', marginLeft:wp(1), marginBottom:hp(3)}}>Why Computational Thinking and Coding?</Text>

                                 </View>
                                  <View style={{flexDirection:'column'}}>
                                     <Icon name='md-checkmark' type='Ionicons' style={{color:'#117A65', fontSize:wp(6), marginTop:hp(5), marginLeft:wp(13)}}/>
                                    <Text style={{fontSize:wp(3), color:'#117A65',  marginLeft:wp(5), marginBottom:hp(2)}}>COMPLETED</Text>   
                                  </View>
                               </View>
                            </Body>
                        </CardItem>
                    </Card>


                    <Card style={{backgroundColor:'white', borderRadius:wp(4)}}>
                        <CardItem style={{backgroundColor:"white", height:hp(10), borderRadius:wp(4)}}>
                            <View style={{backgroundColor:'#2471A3', flexDirection:'row',width:wp(70), marginLeft:wp(-5),height:hp(10), borderRadius:wp(4)}}>
                                <Text style={{color:'white', fontSize:wp(4), marginTop:hp(3), marginLeft:wp(2)}}>APPLY MODULE 1</Text>
                                <Text style={{color:'white', fontSize:wp(4), marginLeft:wp(20), marginTop:hp(3)}}>70%</Text>
                                
                            </View>
                           <Button rounded style={{width:wp(14), height:hp(7), borderRadius:wp(30), backgroundColor:'#FFB74D', marginLeft:wp(10)}}>
                               <Icon name='plus' type='MaterialCommunityIcons' style={{color:'white', fontSize:wp(8)}}/>
                           </Button>
                        </CardItem>
                    </Card>


                    <Card style={{backgroundColor:'white', borderRadius:wp(6)}}>
                         <CardItem style={{backgroundColor:"white", height:hp(15), borderRadius:wp(6)}}>
                            <Body>
                               <View style={{flexDirection:'row'}}>
                                 <View style={{flexDirection:'column'}}>
                                    <Button rounded style={{width:wp(30), height:hp(4), backgroundColor:"#2471A3", marginTop:hp(1.5), marginBottom:hp(1)}}>
                                        <Icon name='unlock-alt' type='FontAwesome' style={{color:'white', fontSize:wp(3)}}/>
                                        <Text style={{color:'white', fontSize:wp(3),}}>MODULE 2</Text>
                                    </Button>

                                    <Text style={{color:'black', fontSize:wp(3.5), width:wp(60), flexWrap:'wrap', marginLeft:wp(1), marginBottom:hp(3)}}>Preparing to Code - Offline Activities</Text>
                                    
                                 </View>
                                  <View style={{flexDirection:'column'}}>
                                     <Icon name='ios-eye' type='Ionicons' style={{color:"#2471A3", fontSize:wp(9), marginTop:hp(2), marginLeft:wp(13)}}/>
                                     <Text style={{fontSize:wp(3), color:"#2471A3",  marginLeft:wp(5), marginBottom:hp(2)}}>IN PROGRESS</Text>
                                  </View>
                               </View>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card style={{backgroundColor:'white', borderRadius:wp(6)}}>
                         <CardItem style={{backgroundColor:"white", height:hp(15), borderRadius:wp(6)}}>
                            <Body>
                               <View style={{flexDirection:'row'}}>
                                 <View style={{flexDirection:'column'}}>
                                    <Button rounded style={{width:wp(30), height:hp(4), backgroundColor:"#B2BABB", marginTop:hp(1.5), marginBottom:hp(1)}}>
                                        <Icon name='lock' type='FontAwesome5' style={{color:'white', fontSize:wp(3)}}/>
                                        <Text style={{color:'white', fontSize:wp(3),}}>MODULE 3</Text>
                                    </Button>

                                    <Text style={{color:'black', fontSize:wp(3.5), width:wp(60), flexWrap:'wrap', marginLeft:wp(1), marginBottom:hp(3)}}>Introduction to Discovery Block Coding</Text>

                                 </View>
                                  <View style={{flexDirection:'column'}}>
                                     <Icon name='lock' type='FontAwesome5' style={{color:"#B2BABB", fontSize:wp(6), marginTop:hp(5), marginLeft:wp(13)}}/>
                                      
                                  </View>
                               </View>
                            </Body>
                        </CardItem>
                    </Card>


                    <Card style={{backgroundColor:'white', borderRadius:wp(6)}}>
                         <CardItem style={{backgroundColor:"white", height:hp(15), borderRadius:wp(6)}}>
                            <Body>
                               <View style={{flexDirection:'row'}}>
                                 <View style={{flexDirection:'column'}}>
                                    <Button rounded style={{width:wp(30), height:hp(4), backgroundColor:"#B2BABB", marginTop:hp(1.5), marginBottom:hp(1)}}>
                                        <Icon name='lock' type='FontAwesome5' style={{color:'white', fontSize:wp(3)}}/>
                                        <Text style={{color:'white', fontSize:wp(3),}}>MODULE 4</Text>
                                    </Button>

                                    <Text style={{color:'black', fontSize:wp(3.5), width:wp(60), flexWrap:'wrap', marginLeft:wp(1), marginBottom:hp(3)}}>Discovery Block Coding Unit 5a Support Experience</Text>

                                 </View>
                                  <View style={{flexDirection:'column'}}>
                                     <Icon name='lock' type='FontAwesome5' style={{color:"#B2BABB", fontSize:wp(6), marginTop:hp(5), marginLeft:wp(13)}}/>
                                  </View>
                               </View>
                            </Body>
                        </CardItem>
                    </Card>

                </ScrollView>   
             </Content>
         </Container>
          
        </View>

        
            
        )
    }
}