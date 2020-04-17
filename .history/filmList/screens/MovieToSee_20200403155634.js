import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';

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
          <ListItem title='Rating' rightTitle={rating} />
          <ListItem title='Synopsis' subtitle={synopsis} />
        </List>
        <Button title='Add to seen' />
      </ScrollView>
    );
  }
}

export default MovieToSee;
