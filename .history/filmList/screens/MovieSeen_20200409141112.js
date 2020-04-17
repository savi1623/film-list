import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';

class MovieSeen extends Component {
  // const { title, rating, review, date } = this.props.navigation.state.params;
  render() {
    console.log(this.props.movie);
    return (
      <ScrollView>
        <ListItem title={title} />
        <ListItem title='Date Seen' subtitle={date} />
        <ListItem title='Rating' rightTitle={rating} />
        <ListItem
          title='Review'
          subtitle={<Rating readonly startingValue={rating} />}
        />
      </ScrollView>
    );
  }
}

export default MovieSeen;
