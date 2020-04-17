import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function MovieToSee({ navigation }) {
  const onLearn = () => {
    navigation.navigate('Review');
  };
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
      <Button title='Add to seen' onPress={() => onLearn()} />
    </ScrollView>
  );
}
