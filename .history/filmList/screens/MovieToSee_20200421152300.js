import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';

class MovieToSee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      rating: '',
      synposis: '',
      date: '',
    };
  }
  onLearn() {
    console.log('clicked');
    this.props.navigation.navigate('Review');
  }
  render() {
    // console.log(synposis);
    return (
      <ScrollView>
        <ListItem title={this.state.title} />
        <ListItem title='Date Released' subtitle={this.state.date} />
        <ListItem
          title='Rating'
          rightTitle={<Rating readonly startingValue={this.state.rating} />}
        />
        <ListItem title='Synopsis' subtitle={this.state.synposis} />
        <Button title='Add to seen' onPress={() => this.onLearn()} />
      </ScrollView>
    );
  }
}

export default MovieToSee;
