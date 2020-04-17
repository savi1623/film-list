import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { movieTS } from '../config/data.js';

class toSeeList extends Component {
  onLearnMore(movie) {
    this.props.navigation.navigate('MovieToSee', { ...movie });
  }
  render() {
    return (
      <ScrollView>
        {moviesTs.map((movie) => (
          <ListItem
            title={movie.title}
            bottomDivider
            onPress={() => this.onLearnMore(movie)}
          />
        ))}
      </ScrollView>
    );
  }
}

export default toSeeList;
