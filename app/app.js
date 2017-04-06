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
import { Screen, DropDownMenu, Divider, ScrollView, } from '@shoutem/ui/index';
import { Stage } from '@shoutem/ui/examples/components/Stage';
import { Nav } from './components/NavigationBar/Nav';

export default class xryrok extends Component {
  render() {
    return (
      <Nav />
    );
  }
}

AppRegistry.registerComponent('xryrok', () => xryrok);
