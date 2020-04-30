import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';

class MovieSeen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.navigation.state.params.title,
      rating: '',
      review: '',
      date: '',
    };
  }

  async componentDidMount() {
    const getMovie = await axios.get(
      `http://localhost:5000/seen/${this.state.title}`
    );
    console.log(getMovie.data.movie[0]);
    this.setState({
      rating: getMovie.data.movie[0].rating,
      review: getMovie.data.movie[0].review,
      date: getMovie.data.movie[0].date,
    });
  }

  render() {
    return (
      <ScrollView>
        <ListItem title={this.state.title} />
        <ListItem title='Date Seen' subtitle={this.state.date} />
        <ListItem title='Review' rightTitle={this.state.review} />
        <ListItem
          title='Rating'
          subtitle={
            <AirbnbRating
              isDisabled={true}
              count={10}
              defaultRating={this.state.rating}
            />
          }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MovieSeen;
