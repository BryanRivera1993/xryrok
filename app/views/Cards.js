import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';


export default class Carts extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image
          style={{flex:1}}
          source={{uri: 'https://pbs.twimg.com/profile_images/686613263811907584/Ni3AWru_.png'}}
        />
        <View style={{margin:20}}>
          <Text style={{fontSize:20}}>Sonic, 30</Text>
          <Text style={{fontSize:15, color:'darkgrey'}}>Hedgehog</Text>
        </View>
        <Button onPress={Actions.home}>Go to Homee</Button><Button onPress={Actions.pageFour}>Go to Cards</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
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
