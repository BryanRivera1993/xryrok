import React, {Component} from 'react';
import {View} from 'react-native';
import {useStrict} from 'mobx';
import {observer} from 'mobx-react/native';
useStrict(true);


import Counter from './Counter';
import store from '../stores/counter';

const OCounter= observer(Counter);

@observer
export default class Test extends Component{
  render() {
    return <OCounter store={store}/>
  }
}
