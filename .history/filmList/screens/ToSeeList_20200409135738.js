import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { movieTS } from '../config/data.js';

class toSeeList extends Component {
  render() {
    return (
      <ScrollView>
        {moviesTs.map((movie) => (
          <ListItem title={movie.title} bottomDivider />
        ))}
      </ScrollView>
    );
  }
}

export default toSeeList;
