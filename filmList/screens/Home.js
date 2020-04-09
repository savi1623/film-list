import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, SearchBar, Header } from 'react-native-elements';
// import { movieTS, seenMovies } from '../config/data.js';

export default function Home({ navigation }) {
  const pressHandler = (screen) => {
    navigation.navigate(screen);
  };
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
      <Button
        title='Movies I want to see'
        onPress={() => pressHandler('ToSeeList')}
      />
      <Button
        title='Movies I have seen'
        onPress={() => pressHandler('SeenList')}
      />
    </View>
  );
}
