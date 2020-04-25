import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';

class MovieSeen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: his.props.navigation.state.params.title,
      rating: '',
      review: '',
      date: '',
    };
  }

  async componentDidMount() {
    const getMovie = await axios.get(
      `http://localhost:5000/tosee/${this.state.title}`
    );
    console.log(getMovie.data);
  }

  render() {
    return (
      <ScrollView>
        <ListItem title={this.state.title} />
        <ListItem title='Date Seen' subtitle={this.state.date} />
        <ListItem title='Rating' rightTitle={this.state.rating} />
        <ListItem
          title='Review'
          subtitle={<Rating readonly startingValue={this.state.review} />}
        />
      </ScrollView>
    );
  }
}

export default MovieSeen;
