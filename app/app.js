import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Navigator
} from 'react-native';

import { Nav } from './components/NavigationBar/Nav';

export default class xryrok extends Component {
  render() {
    return (
        <Nav />
    );
  }
}

AppRegistry.registerComponent('xryrok', () => xryrok);
