import React, { Component } from 'react';
import TopControls from './TopControls';

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <h1 className="text-3xl">
          React project setup. Class components. Error boundary.
        </h1>
        <TopControls />
      </div>
    );
  }
}

export default App;
