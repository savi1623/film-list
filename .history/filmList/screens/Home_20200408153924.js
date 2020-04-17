import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, SearchBar, Header } from 'react-native-elements';
// import { movieTS, seenMovies } from '../config/data.js';

class Home extends Component {
  Seen() {
    this.props.navigation.navigate('SeenList');
  }
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'Movie List', style: { color: '#fff' } }}
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'space-around'
          }}
        />
        <Text>Search For A Movie</Text>
        <SearchBar />
        <Button title='Movies I want to see' onPress={() => Seen()} />
        <Button title='Movies I have seen' />
      </View>
    );
  }
}

export default Home;
