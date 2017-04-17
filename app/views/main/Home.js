import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.menuContainers}>
        <Text style={styles.welcome}>
          Welcome Home!
        </Text>
        <Button onPress={Actions.pageOne}>Go to Page One</Button>
        <Button onPress={Actions.pageTwo}>Go to Page Two</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    menuContainers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});
