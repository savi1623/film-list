import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { seenMovies } from '../config/data.js';

class SeenList extends Component {
  onLearnMore(movie) {
    this.props.navigation.navigate('MovieSeen', { ...movie });
  }
  render() {
    return (
      <ScrollView>
        <List>
          {seenMovies.map((movie) => (
            <ListItem
              title={movie.title}
              bottomDivider
              onPress={() => this.onLearnMore(movie)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default SeenList;
