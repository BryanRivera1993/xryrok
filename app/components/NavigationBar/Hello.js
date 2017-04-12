import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Examples } from '@shoutem/ui';

export class Hello extends Component {
  render() {
    return (
      <Examples />
    );
  }
}

AppRegistry.registerComponent('Hello', () => Hello);
