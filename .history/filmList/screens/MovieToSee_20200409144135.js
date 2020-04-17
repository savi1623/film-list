import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';

class MovieToSee extends Component {
  onLearnMore(movie) {
    this.props.navigation.navigate(movie);
  }
  render() {
    const {
      title,
      rating,
      synopsis,
      stream
    } = this.props.navigation.state.params;
    return (
      <ScrollView>
        <ListItem title={title} />
        <ListItem title='Where To Watch' subtitle={stream} />
        <ListItem
          title='Rating'
          rightTitle={<Rating readonly startingValue={rating} />}
        />
        <ListItem title='Synopsis' subtitle={synopsis} />
        <Button title='Add to seen' onPress={() => this.onLearnMore(Review)} />
      </ScrollView>
    );
  }
}

export default MovieToSee;
