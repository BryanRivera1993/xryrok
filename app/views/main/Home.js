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
        <Button style={styles.buttons} onPress={Actions.pageOne}>Go to Page One</Button>
        <Button style={styles.buttons} onPress={Actions.pageTwo}>Go to Page Two</Button>
        <Button style={styles.buttons} onPress={Actions.pageThree}>Go to Payment</Button>
        <Button style={styles.buttons} onPress={Actions.pageFour}>Go to Cards</Button>
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
    buttons:{
      width:110,
      height:60,
      borderWidth:1,
      borderColor:'#e7e7e7',
      textAlign: 'center',
      margin: 5,
      justifyContent:'center',
      alignItems:'center',
    },
    menuContainers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});
