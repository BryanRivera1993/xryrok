import React, {Component} from 'react';

import {
  Heading,
  Stage,
  View,
  Tile,
  Image,
  Text,
  Title,
  Subtitle,
  Caption,
  Icon,
  Overlay,
  Screen,
  ScrollView,
  Button,
} from '@shoutem/ui';

export default class Info extends Component {
   render() {
    return <View styleName="vertical collapsed">
          <Stage title="Large (featured) tile">
            <Image
              styleName="featured"
              source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png' }}
            >
                <Tile>
                  <Title styleName="md-gutter-bottom">MIKE PATTON TEAMING WITH JOHN KAADA FOR COLLAB ALBUM BACTERIA CULT</Title>
                  <Caption>Sophia Jackson        21 hours ago</Caption>
                </Tile>
              </Image>
            </Stage>
        </View>;
  }
}
