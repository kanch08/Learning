import React, { Component } from 'react';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Aside from './component/aside';
import Main from './component/main';

class App extends Component {
  constructor(){
    super();
    this.state={
       count:0,
    }
  }
  fn = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    return (
      <div>
        <Header counter={this.state.count}/>
        <Aside/>
        <Main function ={this.fn}/>
        <Footer/>
      </div>
       );
  } 
}

export default App;
