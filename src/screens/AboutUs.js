import React, {Component} from 'react'
import {YellowBox,View, StatusBar} from 'react-native'
import axios from 'axios'
import AppText from '../common/AppText'
import AppHeader from '../common/AppHeader'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Actions } from 'react-native-router-flux';

 class AboutUs extends Component {
    constructor() {
        super()
        this.state={
            Name:'',
            Description:''
        }
    }
    componentDidMount() {
        axios.get('https://wakil.dtagdev.com/Apicontroller/AboutUsData')
        .then((response)=> {
            this.setState({Name: response.data.name,
                           Description: response.data.description
            })
        }).catch((err)=> alert(err))
    }

    render() {
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
            'Warning: componentWillUpdate is deprecated',
          ]);
        return(
            <View style={{flex:1}}>
            <StatusBar hidden/>
            <AppHeader text={Strings.about} Licon='ios-menu'  Ltype='Ionicons'  onPressLeft={()=> Actions.drawerOpen()} />
            <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                
                <AppText  text={Strings.Diva} color='#b89f57' fontSize={wp(7)}  marginHorizontal={wp(40)} />
                <AppText  text={this.state.Description} color='black' fontSize={wp(3)} marginHorizontal={wp(3)} marginVertical={hp(2)}/>
            </View>
            </View>
        )
    }
}
export default AboutUs;