import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { AirbnbRating } from 'react-native-ratings';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.navigation.state.params,
      rating: '',
      review: '',
    };
    this.addToSeen = this.addToSeen.bind(this);
    // this.deleteFromTS = this.deleteFromTS.bind(this);
    this.ratingCompleted = this.ratingCompleted.bind(this);
  }

  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
    this.setState({
      rating: rating,
    });
  }

  addToSeen() {
    //take the film and add to the seen state
    console.log('clicked');
    axios
      .post(`http://localhost:5000/review/${this.state.title}`, {
        rating: this.state.rating,
        review: this.state.review,
      })
      .then(() =>
        axios.delete(`http://localhost:5000/delete/${this.state.title}`)
      )
      .then(() => this.props.navigation.navigate('Home'));
  }
  // deleteFromTS(movie) {
  //   //remove film from TS state
  //   axios.delete(`http://localhost:5000/delete/${movie}`);
  // }
  render() {
    console.log(this.props.navigation.state.params);
    return (
      <ScrollView>
        <Text> Your Rating</Text>
        <AirbnbRating count={10} onFinishRating={this.ratingCompleted} />
        <Input label='Your Review' />
        <Button title='Submit' onPress={() => this.addToSeen()} />
      </ScrollView>
    );
  }
}

export default Review;
