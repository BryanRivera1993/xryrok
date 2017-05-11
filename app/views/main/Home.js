import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ScrollView, TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.menuContainers}>
        <Text style={styles.welcome}>
          Xryrok
        </Text>
        <TouchableOpacity style={styles.buttons} onPress={Actions.pageOne}>
          <Icon name='tab' size={130} color="green" style={{}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={Actions.pageTwo}>
          <Icon name='description' size={130} color="green" style={{}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={Actions.pageThree}>
          <Icon name='card-giftcard' size={130} color="grey" style={{}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={Actions.pageFour}>
          <Icon name='collections' size={130} color="green" style={{}} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: 'black'
    },
    buttons:{
      width:130,
      height:130,
      borderWidth:1,
      borderColor:'lightgrey',
      borderRadius: 8,
      margin: 5,
      justifyContent:'center',
      alignItems:'center',
    },
    container: {
    height:60,
    flexDirection:'row',
    paddingTop:10,
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#fff',
    borderBottomWidth:1,
    borderColor:'rgba(0,0,0,0.1)'
  },
    menuContainers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
    }
});
