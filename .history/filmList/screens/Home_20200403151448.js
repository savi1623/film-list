import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { movieTS, seenMovies } from '../config/data.js';

class Home extends Component {
  render() {
    return (
      <View>
        <Button title='Movies I want to see' />
        <Button title='Movies I have seen' />
      </View>
    );
  }
}

export default Home;
