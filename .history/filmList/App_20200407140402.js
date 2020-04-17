import { registerRootComponent } from 'expo';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return <div> Hello</div>;
  }
}

registerRootComponent(App);
