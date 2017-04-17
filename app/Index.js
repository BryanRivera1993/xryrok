import React, {Component} from 'react';
import {View} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import Test from './views/Test';
import Hello from './components/NavigationBar/Hello';
import Home from './views/main/Home';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={Home} initial={"true"} type={"reset"}/>
    <Scene key="pageTwo" component={Hello} type={"replace"}/>
    <Scene key="pageOne" component={Test} type={"replace"}/>
  </Scene>
);

class Index extends Component{
  render() {
    return (<Router scenes={scenes}/>)
  }
}

export default Index;
