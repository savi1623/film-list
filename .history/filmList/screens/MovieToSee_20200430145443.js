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
      rate: '',
    };
  }

  async componentDidMount() {
    // console.log(this.state.title);
    const getMovie = await axios.get(
      `http://localhost:5000/tosee/${this.state.title}`
    );
    this.setState({
      rating: getMovie.data.imdbRating,
      synposis: getMovie.data.Plot,
      date: getMovie.data.Year,
      rate: getMovie.data.Rated,
    });
  }

  onLearn() {
    console.log('clicked');
    this.props.navigation.navigate('Review', this.state.title);
  }
  render() {
    // console.log(synposis);
    const { title } = this.props.navigation.state.params;
    // console.log(this.props.navigation.state.params);
    return (
      <ScrollView>
        <ListItem title={title} titleStyle={{ fontWeight: 'bold' }} />
        <ListItem
          title='Date Released'
          titleStyle={{ fontWeight: 'bold' }}
          subtitle={this.state.date}
        />
        <ListItem
          title={`Rated: ${this.state.rate} `}
          titleStyle={{ fontWeight: 'bold' }}
        />
        <ListItem
          title='Rating'
          titleStyle={{ fontWeight: 'bold' }}
          subtitle={
            <AirbnbRating
              isDisabled={true}
              count={10}
              defaultRating={this.state.rating}
              size={25}
            />
          }
        />
        <ListItem
          title='Synopsis'
          titleStyle={{ fontWeight: 'bold' }}
          subtitle={this.state.synposis}
        />
        <Button title='Add to seen' onPress={() => this.onLearn()} />
      </ScrollView>
    );
  }
}

export default MovieToSee;
