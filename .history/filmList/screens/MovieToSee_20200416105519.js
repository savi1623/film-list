import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';

class MovieToSee extends Component {
  onLearn(review) {
    this.props.navigation.navigate('MovieToSee', { ...review });
  }
  render() {
    const {
      title,
      rating,
      synposis,
      stream
    } = this.props.navigation.state.params;
    // console.log(synposis);
    return (
      <ScrollView>
        <ListItem title={title} />
        <ListItem title='Where To Watch' subtitle={stream} />
        <ListItem
          title='Rating'
          rightTitle={<Rating readonly startingValue={rating} />}
        />
        <ListItem title='Synopsis' subtitle={synposis} />
        <Button title='Add to seen' onPress={() => this.onLearn()} />
      </ScrollView>
    );
  }
}

export default MovieToSee;
