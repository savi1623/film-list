import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
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
