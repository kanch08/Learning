import React, { Component } from 'react';

  
const Design ={
    padding:10,
    margin:10.
}
class Event extends Component {  


    
      
  render(props) {
       const {handleIncrease,name,counter,handleDecrease,decreaseAll} = this.props;
    return (
      <div style={Design}>
        <button onClick={()=>handleIncrease(name)}>+1</button>
        <span>{counter}</span>
        <button onClick={()=>handleDecrease(name)}>-1</button> 
      </div>
    );
  }
}

export default Event;
