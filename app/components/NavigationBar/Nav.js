import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  NavigationBar,
  Heading,
  Title,
  Icon,
  Subtitle,
  Text,
  Caption,
  Button
} from '@shoutem/ui/index';
import { Hello } from './Hello';
import { Hello2 } from './Hello2';


export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentExample: Hello
  }
}

  render(){
    return (
            <View style={styles.container}>
              <View style={styles.header}>
                <Image
                  source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
                  style={{ width: 420, height: 70 }}
                >
                  <NavigationBar
                    styleName="clear"
                    hasHistory
                    leftComponent={(
                      <Button
                      styleName="clear"
                      onPress={this.onMenuPress.bind(this)}>
                        <Icon name="sidebar" />
                      </Button>
                      )}
                    centerComponent={<Heading>Xryrock</Heading>}
                    rightComponent={(
                      <Button styleName="clear">
                        <Text>Report</Text>
                      </Button>
                    )}
                  />
                </Image>
              </View>

              <View style={styles.body}>
                {this.renderContent()}
              </View>
            </View>
    );
}

renderContent() {
    if (this.state.currentExample) {
      const ExampleComponent = this.state.currentExample;
      return <ExampleComponent />;
    }

    return (
      <ScrollView style={styles.menuContainer}>
        <TouchableOpacity onPress={this.onExamplePress.bind(this, Hello)}>
          <Text style={styles.button2}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onExamplePress.bind(this, Hello2)}>
          <Text style={styles.button2}>Demo</Text>
        </TouchableOpacity>
      </ScrollView>
    );
}

onExamplePress(currentExample) {
    this.setState({currentExample});
  }

  onMenuPress() {
    this.setState({currentExample: undefined});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  header: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#5894f3',
    alignItems: 'center',
    zIndex: 1001
  },
  body: {
      flex: 1,
      zIndex: 1000
  },
  menuContainer: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 40,
    backgroundColor: 'white'
  }
});
