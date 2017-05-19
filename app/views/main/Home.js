import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid>
          <Row style={{ backgroundColor: '#D954D7', height: 145 }}>
              <Image style={{width: 440, height: 150}} source={{uri: 'https://static.panoramio.com.storage.googleapis.com/photos/large/14599887.jpg'}} />
          </Row>
          <Row style={{ backgroundColor: 'white', height: 200 }}>
          </Row>
          <Row style={{ backgroundColor: '#D954D7', height: 200 }}>
              <Col style={{ backgroundColor: '#D93735' }}>
                <TouchableOpacity onPress={Actions.pageOne}>
                  <Image style={{width: 220, height: 200}} source={{uri: 'http://seattletimes.com/ABPub/2013/11/18/2022287976.jpg'}} />
                </TouchableOpacity>
              </Col>
              <Col style={{ backgroundColor: '#D954D7' }}>
                <TouchableOpacity onPress={Actions.pageTwo}>
                  <Image style={{width: 250, height: 200}} source={{uri: 'http://21mz8mc7yjt2ymiy81mahbxo.wpengine.netdna-cdn.com/wp-content/uploads/2017/02/web1_M-sanctuary-city-debate-copy-1200x675.jpg'}} />
                </TouchableOpacity>
              </Col>
          </Row>
          <Row style={{ backgroundColor: '#D954D7', height: 200 }}>
              <Col style={{ backgroundColor: '#D954D7' }}>
                <TouchableOpacity onPress={Actions.pageThree}>
                  <Image style={{width: 260, height: 200}} source={{uri: 'http://www.auburn.wednet.edu/cms/lib03/WA01001938/Centricity/Domain/34/WelcometoAuburn.jpg'}} />
                </TouchableOpacity>
              </Col>
              <Col style={{ backgroundColor: '#D93735' }}>
                <TouchableOpacity onPress={Actions.pageFour}>
                  <Image style={{width: 270, height: 200}} source={{uri: 'http://21mz8mc7yjt2ymiy81mahbxo.wpengine.netdna-cdn.com/wp-content/uploads/2017/01/web1_M-protest-at-city-hall-copy-1200x675.jpg'}} />
                </TouchableOpacity>
              </Col>
          </Row>
          </Grid>
        </Content>
      </Container>
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
