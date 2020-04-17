import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, SearchBar, Header } from 'react-native-elements';
// import { movieTS, seenMovies } from '../config/data.js';

class Home extends Component {
  pressHandler(screen) {
    this.props.navigation.navigate(screen);
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
        <Button title='Movies I want to see' />
        <Button
          title='Movies I have seen'
          onPress={() => this.pressHandler('SeenList')}
        />
      </View>
    );
  }
}

export default Home;
