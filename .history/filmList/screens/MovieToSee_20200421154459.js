import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';

class MovieToSee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.navigation.state.params.title,
      rating: '',
      synposis: '',
      date: '',
    };
  }

  async componentDidMount() {
    // console.log(this.state.title);
    const getMovie = await axios
      .get(`http://localhost:5000/tosee/${this.state.title}`)
      .then((data) => {
        console.log(data.data);
      });
  }

  onLearn() {
    console.log('clicked');
    this.props.navigation.navigate('Review');
  }
  render() {
    // console.log(synposis);
    const { title } = this.props.navigation.state.params;
    // console.log(this.props.navigation.state.params);
    return (
      <ScrollView>
        <ListItem title={title} />
        <ListItem title='Date Released' subtitle={this.state.date} />
        <ListItem
          title='Rating'
          rightTitle={<Rating readonly startingValue={this.state.rating} />}
        />
        <ListItem title='Synopsis' subtitle={this.state.synposis} />
        <Button title='Add to seen' onPress={() => this.onLearn()} />
      </ScrollView>
    );
  }
}

export default MovieToSee;
