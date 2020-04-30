import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import { moviesTS, seenMovies } from '../config/data.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toSeeList: moviesTS,
      seenList: seenMovies,
      newMovie: '',
    };
    this.pressHandler = this.pressHandler.bind(this);
    // this.addToSeen = this.addToSeen.bind(this);
    this.addToWatchList = this.addToWatchList.bind(this);
    // this.deleteFromTS = this.deleteFromTS.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const getTS = await axios.get('http://localhost:5000/tsList');
    const getSeen = await axios.get('http://localhost:5000/seenList');
    // console.log(getTS.data);
    // console.log(getSeen.data);
    this.setState(
      {
        toSeeList: getTS.data,
        seenList: getSeen.data,
      },
      console.log(this.state)
    );
  }

  pressHandler(screen, list) {
    this.props.navigation.navigate(screen, {
      movielist: list,
    });
  }
  addToWatchList(movie) {
    //get request with the movie searched => get all info needed for req
    //then add the film to the ToSee state
    axios.post(`http://localhost:5000/tose/${movie}`).then(() => {
      this.componentDidMount();
    });
  }
  // addToSeen(movie) {
  //   //take the film and add to the seen state
  //   axios.post(`http://localhost:5000/review/${movie}`).then(() => {
  //     componentDidMount();
  //   });
  // }
  // deleteFromTS(movie) {
  //   //remove film from TS state
  //   axios.delete(`http://localhost:5000/delete/${movie}`).then(() => {
  //     componentDidMount();
  //   });
  // }
  render() {
    console.log(this.state);
    return (
      // <ImageBackground
      //   source={{ uri: 'https://wallpaperaccess.com/full/1512227.jpg' }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontColor: 'black' }}> Movie List </Text>
        {/* <View style={{ flexDirection: 'row' }}> */}
        <TextInput
          onChangeText={(newMovie) => this.setState({ newMovie })}
          placeholder='Search for a Movie'
          style={{
            paddingLeft: 6,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
        />
        <TouchableOpacity
          onPress={() => this.addToWatchList(this.state.newMovie)}
          style={{
            backgroundColor: '#DDDDDD',
            padding: 5,
            borderRadius: 5,
            margin: 5,
          }}>
          <Text style={{ color: 'black', fontSize: 20 }}>Add to Watchlist</Text>
        </TouchableOpacity>
        {/* </View> */}
        <TouchableOpacity
          // title='Movies I want to see'
          onPress={() => this.pressHandler('ToSeeList', this.state.toSeeList)}
          style={styles.button}>
          <Text style={{ color: 'black', fontSize: 20 }}>
            Movies I want to see
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // title='Movies I have seen'
          onPress={() => this.pressHandler('SeenList', this.state.seenList)}
          style={styles.button}>
          <Text style={{ color: 'black', fontSize: 20 }}>
            Movies I have seen
          </Text>
        </TouchableOpacity>
      </View>
      // </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
});

export default Home;
//header align-items: center; background-color: rgb(61, 109, 204); border-bottom-color: rgb(242, 242, 242); border-bottom-width: 1px; flex-direction: row; height: 44px; justify-content: space-around; padding-right: 10px; padding-left: 10px; padding-top: 0px; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-box-pack: justify;

// searchbar background-color: rgb(57, 62, 66); border-bottom-color: rgb(0, 0, 0); border-bottom-width: 1px; border-top-color: rgb(0, 0, 0); border-top-width: 1px; padding: 8px;
