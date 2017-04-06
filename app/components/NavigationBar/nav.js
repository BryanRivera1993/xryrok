import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  // View,
  TouchableOpacity,
  Image,
  // Text,
  ScrollView
} from 'react-native';
import { View } from '@shoutem/ui/components/View';
import { Stage } from '@shoutem/ui/examples/components/Stage';
import {
  Text,
  Heading,
  Title,
  Subtitle,
  Description,
  Caption,
} from '@shoutem/ui/components/Text';

export default class nav extends Component {
  render() {
    return (

        <View>
          <Stage>
          <Heading>Xryrok</Heading>
          </Stage>
        </View>

    );
  }
}

AppRegistry.registerComponent('nav', () => nav);
