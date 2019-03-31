import React, { Component } from 'react';
import AddDish from './component/menuform';
import fishes from './component/sampledish';
import Dish from './component/Dish';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        fishes:fishes,
    }
}
handleAddDish = (event,dish) => {
    event.preventDefault();
    let adddish= this.state.fishes.slice();
    console.log(dish.name);

    adddish.push(dish);
    this.setState({
      fishes:adddish
    })


}
  render() {
    return (
      <div className="dish-list">
      <div className="dishes">
        {       
            this.state.fishes.map((dish,index) => {
              return <Dish dish={dish} key={index} />;
            })
        }
        </div>
        <h2>ADD DISH</h2>
        <AddDish handleAddDish={this.handleAddDish}/>
        </div>
    );
  }
}

export default App;
