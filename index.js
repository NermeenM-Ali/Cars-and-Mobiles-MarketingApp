/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './src/screens/index';
//import App from './TestForm/App';
//import App from './Socket/index'
//import App from './Task//App'

console.disableYellowBox = true;
YellowBox.ignoreWarnings(['Warning: ...'])
AppRegistry.registerComponent("Udacity", () => App);
