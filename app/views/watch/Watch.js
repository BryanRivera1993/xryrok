
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import YouTube from 'react-native-youtube';

export default class Watch extends Component {

  state = {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true
}

  render() {
    return (
      <View>

          <YouTube
          ref="youtubePlayer"
          videoId="VI_uwDgibSU" // The YouTube video ID VI_uwDgibSU   TD-N4tORx1E
          play={this.state.isPlaying}
                 hidden={false}
                 playsInline={true}
                 apiKey="AIzaSyBB1GFf11bpBuOV06Ae-47LmIVgelv4FVM"
                 onReady={(e)=>{this.setState({isReady: true})}}
                 onChangeState={(e)=>{this.setState({status: e.state})}}
                 onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
                 onError={(e)=>{this.setState({error: e.error})}}
          style={{ height: 300, backgroundColor: 'black', marginVertical: 10}}
          />

          <TouchableOpacity onPress={()=>{this.setState((s) => {return {isPlaying: !s.isPlaying};} )}}>
             <Text style={[styles.welcome, {color: 'blue'}]}>{this.state.status == 'playing' ? 'Pause' : 'Play'}</Text>
           </TouchableOpacity>

           <Text style={styles.instructions}>{this.state.isReady ? 'Player is ready.' : 'Player setting up...'}</Text>
           <Text style={styles.instructions}>Status: {this.state.status}</Text>
           <Text style={styles.instructions}>Quality: {this.state.quality}</Text>
           <Text style={styles.instructions}>{this.state.error ? 'Error: ' + this.state.error : ' '}</Text>


           <Button onPress={Actions.home}>Go to Homee</Button>
           </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
