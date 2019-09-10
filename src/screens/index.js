import React, {Component} from 'react'
import {Router, Scene, Stack} from 'react-native-router-flux'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Provider} from 'react-redux'
import store from '../store/index'
import Splash from './Splash'
import AboutUs from './AboutUs'
import SelectLanguage from './SelectLanguage'
import Categories from './Categories'
import ContactUs from './ContactUs'
import DrawerMenu from '../components/DrawerMenu'
import CarDetails from './CarDetails'
import LapDetails from './LapDetails'
import MobDetails from './MobDetails'
import MB19 from './MB19';
import MB18 from './MB18';
import BMW19 from './BMW19';
import BMW18 from './BMW18';

import Dell7 from './Dell7'
import Dell5 from './Dell5'
import Dell3 from './Dell3'
import Hp7 from './Hp7'
import Hp5 from './Hp5'
import Hp3 from './Hp3'

import IphoneX from './IphoneX'
import IphoneXs from './IphoneXs'
import Oppof11 from './Oppof11'
import Oppof9 from './Oppof9'

import FinalOrder from './FinalOrder'

 
export default class App extends Component {
    render() {
        return(
            <Provider store={store}>  
                <Router>
                        <Stack key='root'>
                            <Scene key='splash' component={Splash} hideNavBar initial />
                            <Scene key='selectLanguage' component={SelectLanguage} hideNavBar />

                            <Scene  key='drawer'
                                drawer
                                contentComponent={DrawerMenu}
                                drawerWidth={wp(60)}
                                drawerPosition='left'
                                hideNavBar
                                
                            >
                            <Scene key='categories'  component={Categories}  hideNavBar />
                            <Scene key='aboutUs' component = {AboutUs}  hideNavBar/>
                            <Scene key='contactUs' component = {ContactUs}  hideNavBar/>
                          </Scene>


                          <Scene key='carDetails'  component={CarDetails}  hideNavBar />
                          <Scene key='lapDetails' component = {LapDetails}  hideNavBar/>
                          <Scene key='mobDetails' component = {MobDetails}  hideNavBar/>

                          <Scene key='mb19'  component={MB19}  hideNavBar />
                          <Scene key='mb18' component = {MB18}  hideNavBar/>
                          <Scene key='bmw19' component = {BMW19}  hideNavBar/>
                          <Scene key='bmw18' component = {BMW18}  hideNavBar/>

                          <Scene key='dell7'  component={Dell7}  hideNavBar />
                          <Scene key='dell5' component = {Dell5}  hideNavBar/>
                          <Scene key='dell3' component = {Dell3}  hideNavBar/>
                          <Scene key='hp7' component = {Hp7}  hideNavBar/>
                          <Scene key='hp5'  component={Hp5}  hideNavBar />
                          <Scene key='hp3' component = {Hp3}  hideNavBar/>


                          <Scene key='iphoneX' component = {IphoneX}  hideNavBar/>
                          <Scene key='iphoneXs' component = {IphoneXs}  hideNavBar/>
                          <Scene key='oppof11'  component={Oppof11}  hideNavBar />
                          <Scene key='oppof9' component = {Oppof9}  hideNavBar/>
                          

                          <Scene key='finalOrder' component = {FinalOrder}  hideNavBar/>

                        </Stack>

                </Router>
            </Provider> 
        )
    }
}