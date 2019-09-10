import React, {Component} from 'react'
import {View, Image, StatusBar,YellowBox} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import * as Progress from 'react-native-progress'
import { Actions } from 'react-native-router-flux';


export default class Splash extends Component {

    Switch =()=> {
        setTimeout(()=>{
            Actions.selectLanguage()
       }, 3000);
    }
    //'#b89f57'
    render() {
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
            'Warning: componentWillUpdate is deprecated',
          ]);
        return(
           <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#1b3142'}}>
               <StatusBar hidden/>
               <Image source={require('../assets/Imgs/LogoDiva.png')} style={{width:wp(60), height:wp(60), marginBottom:hp(10)}}/>
               <Progress.Bar  indeterminate={true} color='#b89f57' progress={0.3} width={wp(70)} height={hp(0.8)}>
               {this.Switch()} 
               </Progress.Bar> 
           </View>
        )
    }
}