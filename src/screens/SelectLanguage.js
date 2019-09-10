import React, {Component} from 'react'
import {View, StatusBar, StyleSheet, YellowBox} from 'react-native'
import {Button} from 'native-base'
import {changeLanguage} from '../actions/changeLanguage'
import Strings from '../assets/Strings';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import AppText from '../common/AppText'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class SelectLanguage extends Component {
    
    render() {
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
            'Warning: componentWillUpdate is deprecated',
          ]);
        return(
            <View style={styles.container}>
                <StatusBar hidden/>
                <Button rounded style={styles.btn1}
                  onPress={()=>{
                      this.props.changeLanguage(false)
                      Strings.setLanguage('en');
                        console.log('lang   '+ this.props.isRtl)
                        Actions.categories()
                  }}
                >
                   <AppText text='English' color='#b89f57' marginHorizontal={wp(28)} fontSize={wp(4)}/>
                </Button>
                <Button rounded  style={styles.btn2}
                   onPress={()=>{
                    this.props.changeLanguage(true)
                    Strings.setLanguage('ar');
                      console.log('lang   '+ this.props.isRtl)
                      Actions.categories()
                }}
                >
                    <AppText text='عربي' color='#1b3142' marginHorizontal={wp(28)} fontSize={wp(7)}/>
                </Button>
            </View>
        )
    }
}
//'#b89f57'
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn1: {
        backgroundColor:'#1b3142',
        width:wp(75),
        borderColor:'gray',
        borderRadius:wp(10),
        marginBottom:hp(4),
        marginLeft:wp(5),
        height:hp(7),
        
    },
    btn2: {
        backgroundColor:'#b89f57',
        width:wp(75),
        borderColor:'gray',
        borderRadius:wp(10),
        marginLeft:wp(5),
        height:hp(7),
        opacity:0.8,
        
    }
})

const mapDispatchToProps = {
    changeLanguage
 }
 const mapStateToProps = state => ({
     isRtl: state.lang.Rtl
 })
export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage)