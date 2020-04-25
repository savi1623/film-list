import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
// import { moviesTS } from '../config/data.js';

class toSeeList extends Component {
  onLearnMore(movie) {
    this.props.navigation.navigate('MovieToSee', { ...movie });
  }
  render() {
    const moviesTS = this.props.navigation.state.params.movielist.tslist;
    console.log(moviesTS);
    return (
      <ScrollView>
        {/* {moviesTS.map((movie) => (
          <ListItem
            title={movie.title}
            bottomDivider
            onPress={() => this.onLearnMore(movie)}
          />
        ))} */}
      </ScrollView>
    );
  }
}

export default toSeeList;
