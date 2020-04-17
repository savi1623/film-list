import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Rating } from 'react-native-ratings';

class Review extends Component {
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
