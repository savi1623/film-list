import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';

class MovieToSee extends Component {
  render() {
    const {
      title,
      rating,
      synopsis,
      stream
    } = this.props.navigation.state.params;
    return (
      <ScrollView>
        <List>
          <ListItem title={title} />
          <ListItem title='Where To Watch' subtitle={stream} />
          <ListItem
            title='Rating'
            rightTitle={<Rating readonly startingValue={rating} />}
          />
          <ListItem title='Synopsis' subtitle={synopsis} />
        </List>
        <Button title='Add to seen' />
      </ScrollView>
    );
  }
}

export default MovieToSee;