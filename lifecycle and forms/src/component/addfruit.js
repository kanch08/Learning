import React, { Component } from 'react';
import FruitCart from './fruitcart';
import './main.css';

class Addfruit extends Component{
    constructor(props){
        super(props);
        this.state={
            fruit:"",
            quantity:0,
            price:0,
            // amount:0,
            items: []
           
        }
    }

    incQuantity = (id) => {
        const { items } = this.state;
        let updatedItems = [...items];
        updatedItems = updatedItems.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                }
            }

            return item;
        });

        this.setState({ items: updatedItems });
    }

    decQuantity = (id) => {
        const{items} = this.state;
        let updatedItems = [...items];
        updatedItems = updatedItems.map((item) => {
            if(item.id === id){
                    return{
                        ...item,
                        quantity : item.quantity - 1,
                    }
                }
            return item;
        });
        this.setState(
            {items:updatedItems}
        )
    }      
   
    handleChange = event => {
        console.log(">>>",typeof(event.target.value));
        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(this.state);
    };
    handleSubmit = event  => {
        event.preventDefault();
        // console.log(">>>>>");
        if(!this.state.fruit || !this.state.quantity || !this.state.price){
            alert("All Field are Required")
        }
        else{
            this.setState({
                items:[...this.state.items,
                {  
                    id: Math.ceil(Math.random() * 10000000),
                    name:this.state.fruit,
                    quantity: +this.state.quantity,
                    price: +this.state.price,
                    amount: (this.state.price)* (this.state.quantity)
                }
            ]
        }, () => console.log(this.state.items));
        
            // alert("Item Added Successfully");   
        }
      }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>Add Fruit Items</h1>
                    <table>
                        <tr>
                            <td>Add Fruit Name</td>
                            <td>
                                <input type="text" 
                                value={this.state.fruit} 
                                name="fruit"
                                placeholder="Enter Fruitname" 
                                onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td>Add Quantity(in kg)</td>
                            <td>
                                <input 
                                type="number" 
                                value={this.state.quantity} 
                                name="quantity" 
                                placeholder="Enter Quantity"
                                onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td>Add Price</td>
                            <td>
                                <input 
                                type="number" 
                                value={this.state.price} 
                                name="price" 
                                placeholder="Enter Price"
                                onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Add" /></td>
                        </tr>
                    </table>
                </form>
             
             
             
                <FruitCart 
                    items={this.state.items} 
                    increase={this.incQuantity} 
                    decrease={this.decQuantity}
                 />
            </div>
        )
    }
}

export default Addfruit;