import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';

class Review extends Component {
  render() {
    return (
      <ScrollView>
        <Input label='Your Rating' />
        <Input label='Your Review' />
        <Button title='Submit' />
      </ScrollView>
    );
  }
}

export default Review;
