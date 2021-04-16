import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {API} from './src/api/constants';
import {setupAxios} from './src/config/axios';

setupAxios(API);

AppRegistry.registerComponent(appName, () => App);
