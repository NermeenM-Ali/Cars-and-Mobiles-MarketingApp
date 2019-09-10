import React, {Component} from 'react'
import {Text, View, TouchableOpacity, Image, ScrollView, StatusBar} from 'react-native'
import {Card, CardItem, Header , Left, Right, Body, Title, Button} from 'native-base'
export default class Shape extends Component {
    render() {
        return(
            <View style={{flex:1}}>
                <StatusBar hidden/>
                <Header style={{backgroundColor:'#BA4A00'}}>
                    <Left />
                    <Body style={{marginLeft:140}}>
                        <Title >Products</Title>
                    </Body>
                    <Right />
                </Header>
                
                <ScrollView>
                    <Card style={{ height: 350 }}>
                        <CardItem style={{alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                            <Image source={require('./assets/Imgs/womens.jpg')}   style={{marginTop:20}} />
                            <Button transparent style={{ justifyContent:'center', alignItems:'center', marginTop:15}}>
                                <Text style={{color:'#BA4A00', fontSize:24}}>Women Clothes</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card style={{ height: 350 }}>
                       <CardItem style={{alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                            <Image source={require('./assets/Imgs/mens.jpg')}  style={{marginTop:20}}  />
                            <Button transparent style={{ justifyContent:'center', alignItems:'center', marginTop:15}}>
                                <Text style={{color:'#BA4A00', fontSize:24}}>Men Clothes</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card style={{ height: 350 }}>
                       <CardItem style={{alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                            <Image source={require('./assets/Imgs/lap.jpg')}  style={{marginTop:20}}  />
                            <Button transparent style={{ justifyContent:'center', alignItems:'center', marginTop:15}}>
                                <Text style={{color:'#BA4A00', fontSize:24}}>LapTops</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card style={{ height: 350 }}>
                       <CardItem style={{alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                            <Image source={require('./assets/Imgs/mob.jpg')} style={{marginTop:20}}    />
                            <Button transparent style={{ justifyContent:'center', alignItems:'center', marginTop:15}}>
                                <Text style={{color:'#BA4A00', fontSize:24}}>Mobiles</Text>
                            </Button>
                        </CardItem>
                    </Card>
                </ScrollView>
            </View>
        )
    }
}

/*
 <View style={{flex:1, backgroundColor:'#A3E4D7'}}>
                <TouchableOpacity style={{flexDirection:'column', alignItems:'center', height:60}}>
                    <Image  source={require('./assets/Imgs/womens.jpg')}  style={{position:'absolute', marginTop:-30, width:200, height:200, borderRadius: 100, marginBottom:50}}/>
                    
                </TouchableOpacity>
                <View style={{width:250, height:100, marginTop:100, backgroundColor:'white', justifyContent:'center', alignItems:'center', borderRadius:20}}>
                      <Text style={{fontSize:24, color:'black'}}>Clothes</Text>
                    </View>
            </View>
*/            