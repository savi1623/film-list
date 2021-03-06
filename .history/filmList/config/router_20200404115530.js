import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from '../screens/Home.js';
import MovieSeen from '../screens/MovieSeen.js';
import MovieToSee from '../screens/MovieToSee.js';
import Review from '../screens/Review.js';
import SeenList from '../screens/SeenList.js';
import ToSeeList from '../screens/ToSeeList';

const Stack = createStackNavigator();

function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='MoviesSeen' component={MovieSeen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
