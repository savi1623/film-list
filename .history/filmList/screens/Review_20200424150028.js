import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Rating } from 'react-native-ratings';

class Review extends Component {
  constructor(props) {
    super(props);
    this.addToWatchList = this.addToWatchList.bind(this);
    // this.deleteFromTS = this.deleteFromTS.bind(this);
  }

  addToSeen(movie) {
    //take the film and add to the seen state
    axios
      .post(`http://localhost:5000/review/${movie}`)
      .then(() => axios.delete(`http://localhost:5000/delete/${movie}`))
      .then(() => this.props.navigation.navigate('Home'));
  }
  // deleteFromTS(movie) {
  //   //remove film from TS state
  //   axios.delete(`http://localhost:5000/delete/${movie}`);
  // }
  render() {
    return (
      <ScrollView>
        <Text> Your Rating</Text>
        <Rating />
        <Input label='Your Review' />
        <Button
          title='Submit'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </ScrollView>
    );
  }
}

export default Review;
