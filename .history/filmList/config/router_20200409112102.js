import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home.js';
import MovieSeen from '../screens/MovieSeen.js';
import MovieToSee from '../screens/MovieToSee.js';
import Review from '../screens/Review.js';
import SeenList from '../screens/SeenList.js';
import ToSeeList from '../screens/ToSeeList';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Movie List'
    }
  },
  ToSeeList: {
    screen: ToSeeList,
    navigationOptions: {
      title: 'Movies To See'
    }
  },
  MovieToSee: {
    screen: MovieToSee,
    navigationOptions: {
      title: 'Movie To See'
    }
  },
  Review: {
    screen: Review,
    navigationOptions: {
      title: 'Review'
    }
  },
  SeenList: {
    screen: SeenList,
    navigationOptions: {
      title: 'Movies Seen'
    }
  },
  MovieSeen: {
    seen: MovieSeen,
    navigationOptions: {
      title: 'Movie Seen'
    }
  }
};

const Root = createStackNavigator(screens);

// const Stack = createStackNavigator();

// function Root() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen name='Home' component={Home} />
//         <Stack.Screen name='SeenList' component={SeenList} />
//         <Stack.Screen name='ToSeeList' component={ToSeeList} />
//         <Stack.Screen name='MovieSeen' component={MovieSeen} />
//         <Stack.Screen name='MovieToSee' component={MovieToSee} />
//         <Stack.Screen name='Review' component={Review} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default Root;
