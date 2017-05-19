import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('./../../components/img/image.png'),
    },
    {
        text: 'Card 2',
        name: '2',
        image: require('./../../components/img/image.png'),
    },
    {
        text: 'Card 3',
        name: '3',
        image: require('./../../components/img/image.png'),
    },
    {
        text: 'Card 4',
        name: '4',
        image: require('./../../components/img/image.png'),
    },
    {
        text: 'Card 5',
        name: '5',
        image: require('./../../components/img/image.png'),
    },
];
export default class DeckSwiperExample extends Component {
  render() {
        return (
            <Container>
                <View>
                    <DeckSwiper
                        dataSource={cards}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={item.image} />
                                        <Body>
                                            <Text>{item.text}</Text>
                                            <Text note>NativeBase</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ resizeMode: 'cover', width: 440 }} source={item.image} />
                                </CardItem>
                                <CardItem>
                                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                    <Text>{item.name}</Text>
                                </CardItem>
                            </Card>
                        }
                    />
                    <Button onPress={Actions.home}>Go to Homee</Button>
                </View>
            </Container>
        );
    }
}
