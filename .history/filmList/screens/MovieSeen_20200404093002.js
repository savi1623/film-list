import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class MovieSeen extends Component {
  render() {
    const { title, rating, review, date } = this.props.navigation.state.params;
    return (
      <ScrollView>
        <List>
          <ListItem title={title} />
          <ListItem title='Date Seen' subtitle={date} />
          <ListItem title='Rating' rightTitle={rating} />
          <ListItem
            title='Review'
            subtitle={<Rating readonly startingValue={rating} />}
          />
        </List>
      </ScrollView>
    );
  }
}

export default MovieSeen;
