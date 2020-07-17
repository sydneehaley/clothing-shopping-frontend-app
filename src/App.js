import React, { Component } from 'react';
import './public/css/bootstrap.css';

import HomePage from './components/HomePage/HomePage';

import './public/css/main.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HomePage />
      </div>
    );
  }
}

export default App;
