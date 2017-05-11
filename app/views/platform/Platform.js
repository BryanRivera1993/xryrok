import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Actions} from 'react-native-router-flux';

export default class Platform extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Grid>
                      <Row style={{ backgroundColor: '#D954D7', height: 145 }}>
                          <Image style={{width: 440, height: 150}} source={{uri: 'https://static.panoramio.com.storage.googleapis.com/photos/large/14599887.jpg'}} />
                      </Row>
                      <Row style={{ backgroundColor: '#D954D7', height: 200 }}>
                          <Col style={{ backgroundColor: '#D93735' }}>
                            <TouchableOpacity>
                              <Image style={{width: 220, height: 200}} source={{uri: 'http://seattletimes.com/ABPub/2013/11/18/2022287976.jpg'}} />
                            </TouchableOpacity>
                          </Col>
                          <Col style={{ backgroundColor: '#D954D7' }}>
                            <TouchableOpacity>
                              <Image style={{width: 250, height: 200}} source={{uri: 'http://21mz8mc7yjt2ymiy81mahbxo.wpengine.netdna-cdn.com/wp-content/uploads/2017/02/web1_M-sanctuary-city-debate-copy-1200x675.jpg'}} />
                            </TouchableOpacity>
                          </Col>
                      </Row>
                      <Row style={{ backgroundColor: '#D954D7', height: 200 }}>
                          <Col style={{ backgroundColor: '#D954D7' }}>
                            <TouchableOpacity>
                              <Image style={{width: 260, height: 200}} source={{uri: 'http://www.auburn.wednet.edu/cms/lib03/WA01001938/Centricity/Domain/34/WelcometoAuburn.jpg'}} />
                            </TouchableOpacity>
                          </Col>
                          <Col style={{ backgroundColor: '#D93735' }}>
                            <TouchableOpacity>
                              <Image style={{width: 270, height: 200}} source={{uri: 'http://21mz8mc7yjt2ymiy81mahbxo.wpengine.netdna-cdn.com/wp-content/uploads/2017/01/web1_M-protest-at-city-hall-copy-1200x675.jpg'}} />
                            </TouchableOpacity>
                          </Col>
                      </Row>
                      <Row style={{ backgroundColor: '#D954D7', height: 200 }}>
                          <Col style={{ backgroundColor: '#D93735' }}>
                            <TouchableOpacity>
                              <Image style={{width: 220, height: 200}} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Auburn%2C_WA_%E2%80%94_Game_Farm_Park.jpg/640px-Auburn%2C_WA_%E2%80%94_Game_Farm_Park.jpg'}} />
                            </TouchableOpacity>
                          </Col>
                          <Col style={{ backgroundColor: '#D954D7' }}>
                            <TouchableOpacity onPress={Actions.home}>
                              <Image style={{width: 220, height: 200}} source={{uri: 'https://u.realgeeks.media/choicehomes4sale/auburn/auburn_welcome.jpg'}} />
                            </TouchableOpacity>
                          </Col>
                      </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}
