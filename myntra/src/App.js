import React, { Component } from 'react';
import Header from './component/header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import Slider from './component/carousel';
import Brands from './component/container';


class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Slider />
          <Brands />
      </div>
    );
  }
}

export default App;
