import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  // View,
  TouchableOpacity,
  // Image,
  // Text,
  ScrollView
} from 'react-native';
import { View } from '@shoutem/ui/components/View';
import { Stage } from '@shoutem/ui/examples/components/Stage';
import {
  NavigationBar,
  Heading,
  Title,
  Icon,
  Subtitle,
  Text,
  Caption,
  Image,
  Button
} from '@shoutem/ui/index'


export function Nav() {
    return (
        <View>
          <Stage>
              <NavigationBar
                hasHistory
                leftComponent={<Icon name="sidebar" />}
                centerComponent={<Title>Xryrock Fuck YeaH</Title>}
                rightComponent={(
                  <Button styleName="clear">
                    <Text>Report</Text>
                  </Button>
                )}
              />
          </Stage>
        </View>
    );
}
