import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
// import { movieTS, seenMovies } from '../config/data.js';

export default function Home({ navigation }) {
  const pressHandler = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <ImageBackground source = {{uri = "https://wallpaperaccess.com/full/1512227.jpg"}}>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontColor: 'black' }}> Movie List </Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder='Search for a Movie'
            style={{
              paddingLeft: 6,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#DDDDDD',
              padding: 5,
              borderRadius: 5,
              margin: 5,
            }}>
            <Text style={{ color: 'black', fontSize: 20 }}>Search </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          // title='Movies I want to see'
          onPress={() => pressHandler('ToSeeList')}
          style={styles.button}>
          <Text style={{ color: 'black', fontSize: 20 }}>
            Movies I want to see
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // title='Movies I have seen'
          onPress={() => pressHandler('SeenList')}
          style={styles.button}>
          <Text style={{ color: 'black', fontSize: 20 }}>
            Movies I have seen
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
});

//header align-items: center; background-color: rgb(61, 109, 204); border-bottom-color: rgb(242, 242, 242); border-bottom-width: 1px; flex-direction: row; height: 44px; justify-content: space-around; padding-right: 10px; padding-left: 10px; padding-top: 0px; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-box-pack: justify;

// searchbar background-color: rgb(57, 62, 66); border-bottom-color: rgb(0, 0, 0); border-bottom-width: 1px; border-top-color: rgb(0, 0, 0); border-top-width: 1px; padding: 8px;
