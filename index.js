/** @format */

import {AppRegistry} from 'react-native';
//import App from './src/App';
import {name as appName} from './app.json';
import login from './src/component/login';

AppRegistry.registerComponent(appName, () =>login);
