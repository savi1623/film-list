import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Rating } from 'react-native-ratings';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.navigation.state.params,
    };
    this.addToSeen = this.addToSeen.bind(this);
    // this.deleteFromTS = this.deleteFromTS.bind(this);
  }

  addToSeen() {
    //take the film and add to the seen state
    axios
      .post(`http://localhost:5000/review/${this.state.title}`)
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
        {/* <Text> Your Rating</Text>
        <Rating />
        <Input label='Your Review' />
        <Button
          title='Submit'
          onPress={() => this.addToSeen(title)}
        /> */}
      </ScrollView>
    );
  }
}

export default Review;
