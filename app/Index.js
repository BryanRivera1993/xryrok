import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Actions, Scene, Router, NavigationBar} from 'react-native-router-flux';

import Test from './views/Test';
import Home from './views/main/Home';
import Watch from './views/watch/Watch';
import DeckSwiper from './views/cards/Deck';
import Platform from './views/platform/Platform';

const scenes = Actions.create(
    <Scene key="root" hideNavBar={true}>
      <Scene key="home" component={Home} initial={"true"} type={"reset"} />
      <Scene key="pageOne" component={Test} type={"replace"}/>
      <Scene key="pageTwo" component={Platform} type={"replace"}/>
      <Scene key="pageThree" component={Watch} type={"replace"}/>
      <Scene key="pageFour" component={DeckSwiper} type={"replace"}/>
    </Scene>
);

class Index extends Component{
  render() {
    return (
      <Router scenes={scenes}/>
    )
  }
}

export default Index;
