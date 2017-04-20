'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';


import SwipeCards from 'react-native-swipe-cards';

const Cards = [{
  "id": 1,
  "first_name": "Denise",
  "age": 21,
  "friends": 9,
  "interests": 38,
}, {
  "id": 2,
  "first_name": "Cynthia",
  "age": 27,
  "friends": 16,
  "interests": 49,
}, {
  "id": 3,
  "first_name": "Maria",
  "age": 29,
  "friends": 2,
  "interests": 39,
}, {
  "id": 4,
  "first_name": "Jessica",
  "age": 20,
  "friends": 18,
  "interests": 50,
}, {
  "id": 5,
  "first_name": "Julie",
  "age": 28,
  "friends": 2,
  "interests": 13,
}, {
  "id": 6,
  "first_name": "Anna",
  "age": 24,
  "friends": 12,
  "interests": 44,
}]

const Cards2 = [
  {name: '10', image: 'https://pbs.twimg.com/profile_images/686613263811907584/Ni3AWru_.png'},
  {name: '11', image: 'https://pbs.twimg.com/profile_images/686613263811907584/Ni3AWru_.png'},
  {name: '12', image: 'https://pbs.twimg.com/profile_images/686613263811907584/Ni3AWru_.png'},
  {name: '13', image: 'https://pbs.twimg.com/profile_images/686613263811907584/Ni3AWru_.png'},
]



export default class Cartas extends Component{
  constructor(props){
    super(props)
    this.state = {
      cards: Cards
    }
  }
  Card(x){
    return (
      <View style={styles.card2}>
        <Image source={{uri: 'https://pbs.twimg.com/profile_images/686613263811907584/Ni3AWru_.png'}} resizeMode="contain" style ={{width:350, height:350}}/>
        <View style={{width:350, height:70, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', margin:15, marginTop:25,}} >
        <Text style={{fontSize:20, fontWeight:'300', color:'#444'}}>{x.first_name}, </Text>
        <Text style={{fontSize:21, fontWeight:'200', color:'#444'}}>{x.age}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={{padding:13,  borderLeftWidth:1,borderColor:'#e3e3e3', alignItems:'center', justifyContent:'space-between'}}><Icon name='people-outline' size={20} color="#777" style={{}} /><Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>O</Text></View>
        <View style={{padding:13, borderLeftWidth:1,borderColor:'#e3e3e3', alignItems:'center', justifyContent:'space-between'}}><Icon name='import-contacts' size={20} color="#777" /><Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>o</Text></View>
        </View>
        </View>
      </View>
    )
  }
  handleYup (card) {
    console.log("yup")
  }
  handleNope (card) {
    console.log("nope")
  }
  noMore(){
    return (
      <View style={styles.card2} >
        <Text>No More Cards</Text>
      </View>
    )
  }
  yup(){
    console.log(this.refs['swiper'])
this.refs['swiper']._goToNextCard()  }

nope(){
    console.log(this.refs['swiper'])
this.refs['swiper']._goToNextCard()  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeCards
          ref = {'swiper'}
          cards={this.state.cards}
          loop={false}

          containerStyle = {{  backgroundColor: '#f7f7f7', alignItems:'center', margin:20}}
          renderCard={(cardData) => this.Card(cardData)}
          renderNoMoreCards={() => this.noMore()}
          showYup={false}
          showNope={false}

          handleYup={this.handleYup}
          handleNope={this.handleNope}
          cardRemoved={this.cardRemoved}
        />
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginBottom:30}}>
        <TouchableOpacity style = {styles.buttons} onPress = {() => this.nope()}>
        <Iconz name='ios-close' size={45} color="#888" style={{}} />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonSmall}>
        <Iconz name='ios-information' size={25} color="#888" style={{}} />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttons} onPress = {() => this.yup()}>
        <Iconz name='ios-heart-outline' size={36} color="#888" style={{marginTop:5}} />
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginBottom:25}}>
          <Button onPress={Actions.home}>Go to Homee </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    zIndex:-1,
    flex: 1,
    alignItems: 'center',
    alignSelf:'center',
    borderWidth:2,
    borderColor:'#e3e3e3',
    width: 350,
    height: 420,
  },
  buttons:{
    width:80,
    height:80,
    borderWidth:10,
    borderColor:'#e7e7e7',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40
  },
  buttonSmall:{
    width:50,
    height:50,
    borderWidth:10,
    borderColor:'#e7e7e7',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25
  },
  thumbnail: {
    flex: 1,
    width: 400,
    height: 400,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  container: {
    flex: 1,

    backgroundColor: '#f7f7f7',
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   card2: {
    zIndex: 289,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf:'center',
    margin: 10,
    marginTop: 100,
    marginBottom: 20,
    borderWidth:1,
    borderColor:'lightgrey',
    width: 350,
    height: 420,
  }
})
