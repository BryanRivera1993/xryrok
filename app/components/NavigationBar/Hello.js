import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import { Examples } from '@shoutem/ui';

export default class Hello extends Component {
  render() {
    return (
      <ScrollView style={styles.menuContainer}>
        <Button onPress={Actions.pageOne}>Go to Register page</Button><Button onPress={Actions.home}>Go to home page</Button>
        <Examples />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    menuContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'white'
  }
});
