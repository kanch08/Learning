import React, { Component } from 'react';
import Event from './func';

const Design = {
  width:200,
  margin:'auto',
  position:'relative',
  top:50,
}
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      counter1:0,
      counter2:0,
      counter3:0,
    }
  }
  handleIncrease=(counterName) => {
    console.log("counter name"+counterName)
    this.setState({
        [counterName]:this.state[counterName]+1
    })
 }
  handleDecrease=(counterName) => {
    this.setState({
        [counterName]: this.state[counterName]-1
    })
  }; 
  
  decreaseAll = () => {
    this.setState({
      counter1:this.state.counter1-1,
      counter2:this.state.counter2-1,
      counter3:this.state.counter3-1
 
    })
  }
 increaseAll = () => {
   this.setState({
     counter1:this.state.counter1+1,
     counter2:this.state.counter2+1,
     counter3:this.state.counter3+1

   })

 }

  render() {
    return (
      <div style={Design}>
          <Event 
           counter={this.state.counter1}
           handleIncrease={this.handleIncrease} 
           name="counter1"
           handleDecrease={this.handleDecrease} 
           decreaseAll={this.decreaseAll}
           />
          <Event 
            counter={this.state.counter2} 
            handleIncrease={this.handleIncrease} 
            name="counter2"  
            handleDecrease={this.handleDecrease} 
            decreaseAll={this.decreaseAll}
          />
          <Event
            counter={this.state.counter3 } 
            handleIncrease={this.handleIncrease} 
            name="counter3"
            handleDecrease={this.handleDecrease} 
            decreaseAll={this.decreaseAll}
          />

          <button onClick={this.increaseAll}>IncreaseAll</button>
          <button onClick={this.decreaseAll}>DecreaseAll</button>

      </div>
    );
  }
}

export default App;
