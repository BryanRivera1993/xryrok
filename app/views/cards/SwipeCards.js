import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import Cartas from './elements/Cartas';

export default class Cards extends Component {
  render() {
    return (
      <Cartas style={{flex:1}} />
    )
  }
}

const styles = StyleSheet.create({
  cart: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    marginTop: 100,
    marginBottom: 100,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
  }
})
