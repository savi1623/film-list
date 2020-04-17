import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { seenMovies } from '../config/data.js';

class SeenList extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          {seenMovies.map((movie) => (
            <ListItem />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default SeenList;
