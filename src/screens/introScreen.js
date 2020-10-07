import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 
const slides = [
  {
    key: 1,
    title: 'Welcome to AppName',
    text: 'AppName combines the best deals from all your favorite food delivery apps and allows you to compare them side by side',
    image: require('../../assets/mainpage.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Catch Those Hidden Costs!',
    text: 'Get a breakdown of the various fees and hidden costs that different food delivery apps charge for the same restaurant',
    image: require('../../assets/icon.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 4,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../assets/favicon.png'),
    backgroundColor: '#22bcb5',
  }
];
 
export default class IntroScreen extends Component {
  constructor(props){
    this.state = {
        showRealApp: false
    }
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
  }
}